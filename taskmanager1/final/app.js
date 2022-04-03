// const express = require("express");
// const app = express();

// //routes
// app.get("/hello", (req, res) => {
//   res.send("Taskmangerapp");
// });

// const port = 3000;
// app.listen(port, console.log(`server is listening on port ${port}...`));

const connectDB = require("./db/connect");

const express = require("express");
const app = express();
const routes = require("./routes/task");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", routes);
app.use(notFound);
app.use(errorHandlerMiddleware);
//api/version/tasks that it will perform
//api.get('/api/v1/tasks')    -get all tasks
//api.post('/api/v1/tasks')    -create a new tasks
//api.get('/api/v1/tasks/:id')    -get single tasks
//api.patch('/api/v1/tasks/:id')    -update tasks
//api.delete('/api/v1/tasks/:id')    - delete  tasks

const port = process.env.port || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI); //it will return promise

    app.listen(port, () => {
      console.log(`Blog app listening at  http://localhost: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

console.log("Task manager");
