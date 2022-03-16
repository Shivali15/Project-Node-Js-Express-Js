require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success!!!!");
    //once we run process we will exit automaticaly
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

//run node populate   in terminal
//then it will add products.json file in (storeAPI:products) mongodb
