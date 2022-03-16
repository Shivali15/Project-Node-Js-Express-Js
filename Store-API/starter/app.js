console.log("Project Store API");
const express = require("express");
const app = express();

require("dotenv").config();
// async error
require("express-async-errors");

const connectDB = require("./db/connect");
const productRouter = require("./routes/routes-product");

const notfoundmiddleware = require("./middleware/not-found");
const errormiddleware = require("./middleware/error-handler");

//middleware
//passing express invoking json
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a .href="/api/v1/products">Products route </a>');
});
app.use("/api/v1/products", productRouter);

//product route
app.use(notfoundmiddleware);
app.use(errormiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect db
    await connectDB(process.env.MONGO_URI);

    app.listen(port, console.log(`Server is listening to port ${port}.....`));
  } catch ({ error }) {
    console.log(error);
  }
};
start();
