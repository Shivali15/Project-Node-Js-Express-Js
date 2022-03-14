const getalltasks = (req, res) => {
  res.send("get all tasks");
};
const createalltask = (req, res) => {
  res.send("create all tasks");
};
const gettask = (req, res) => {
  res.send(" get single  tasks");
};
const updatetask = (req, res) => {
  res.send("update all tasks");
};
const deletetask = (req, res) => {
  res.send("delete all tasks");
};

module.exports = {
  getalltasks,
  createalltask,
  gettask,
  updatetask,
  deletetask,
};
