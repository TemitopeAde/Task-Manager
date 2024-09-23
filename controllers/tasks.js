const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true
  });

  if (!task) {
    return res.status(404).json({ msg: `${taskId} not found` });
  }

  res.status(200).json({ msg: "item updated" });
});

const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: `${taskId} was not found` });
  }

  res.status(200).json({ msg: `${taskId} was deleted` });
});

const createTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: `No task with ${taskId} was found` });
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  updateTasks,
  deleteTasks,
  createTasks,
  getTask
};
