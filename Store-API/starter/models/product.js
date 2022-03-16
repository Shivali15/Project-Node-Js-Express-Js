const mongoose = require("mongoose");

//schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    //first booleanvlaue n second custom msz
    required: [true, "product name must be provided"],
  },
  price: {
    //price value in num
    type: Number,
    required: [true, "product price must be provided"],
  },
  featured: {
    // featured valuein boolean true/false
    type: Boolean,
    default: false,
  },
  rating: {
    //what is rating for product in betn 1-5
    type: Number,
    default: 4.5,
  },
  createdAt: {
    //when product was created : date
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    //limiting the property using enum property
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      //custom erorr msz
      message: "{VALUE} is not supported",
    },
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
});

//set up the  module
module.exports = mongoose.model("Product", productSchema);
