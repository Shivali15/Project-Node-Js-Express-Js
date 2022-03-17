require("dotenv").config();
require("express-async-errors");
//having a package which handel async error

const express = require("express");
const app = express();

//importing function of router main.js
const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware

//in public saving static files having html, css,browser app.js
app.use(express.static("./public"));
//.json:for  post routes  -> req.body  -> get data
app.use(express.json());

//root endpoint// setup that having in postman n everytime //get req on rootpoint-> just go with main router
app.use("/api/v1", mainRouter);

//both middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//navigate to browser at localhost 3000
// port variable which access port in which it will execute
const port = process.env.PORT || 3000;

//setup port
const start = async () => {
  try {
    //console if port is get accessed
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    //otherwise poke error msz
    console.log(error);
  }
};

start();
