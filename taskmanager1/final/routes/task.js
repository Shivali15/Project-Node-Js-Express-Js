const express = require("express");
const router = express.Router();

const {
  getalltasks,
  createalltask,
  gettask,
  updatetask,
  deletetask,
  edittask,
} = require("../controller/tasks");
router.route("/").get(getalltasks).post(createalltask);
router.route("/:id").get(gettask).patch(updatetask).delete(deletetask);

// router.route("/").get((req, res) => {
//   res.send("all items");
// });

module.exports = router;
