const express = require("express");
const app = express();
const routes = require("./router/task");

//middleware

app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", routes);

//api/version/tasks that it will perform
//api.get('/api/v1/tasks')    -get all tasks
//api.post('/api/v1/tasks')    -create a new tasks
//api.get('/api/v1/tasks/:id')    -get single tasks
//api.patch('/api/v1/tasks/:id')    -update tasks
//api.delete('/api/v1/tasks/:id')    - delete  tasks

const port = 3000;
app.listen(port, () => {
  console.log(`Blog app listening at  http://localhost: ${port}`);
});

console.log("Task manager");
