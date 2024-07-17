const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: String,
  priority: String,
  status: String,
});

const TaskModel = mongoose.model("tasks", UserSchema);
module.exports = TaskModel;
