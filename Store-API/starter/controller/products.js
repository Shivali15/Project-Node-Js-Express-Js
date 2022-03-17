const Product = require("../models/product");

const getallproductsstatic = async (req, res) => {
  //   throw new Error("testing async products");

  const products = await Product.find({ price: { $gt: 30 } })
    //   res.status(202).json({ msg: "products testing routes" });

    //regex query operator
    // name:{$regex:search,$options:'i'}

    .sort("price")
    .select("name price");

  res.status(200).json({ products, nbHits: products.length });
};
const getallproducts = async (req, res) => {
  //   console.log(req.query);

  //
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  //if company exixts then perform the below logic

  if (company) {
    queryObject.company = company;
  }

  //if the name exists then i will go my queryobject  name=name match name
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    //mapping user
    const operatorMap = {
      ">": "$gt", //greater than
      ">=": "$gte", //greater than equal
      "=": "$eq", //equal
      "<": "$lt", //less than
      "<=": "$lte", //less than equal
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      //callback function
      //if match is there then it will call

      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Product.find(queryObject);
  // sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  //checking fields
  //which field we want to see name,price,..
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
    // select n passing directly
  }

  //setting page that we want to display
  const page = Number(req.query.page) || 1;
  //setting limit how many to get back
  const limit = Number(req.query.limit) || 10;

  //skip the part move ahead
  //skipping items in ur response
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  // 23
  //pages: 4
  //    7 7 7 2

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getallproducts,
  getallproductsstatic,
};
