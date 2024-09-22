const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTasks,
  deleteTasks,
  getTask,
  updateTasks
} = require("../controllers/tasks");

router.route("/").get(getAllTasks);
router.route("/:id").get(getTask).patch(updateTasks).delete(deleteTasks)
 

module.exports = router;
