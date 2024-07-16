const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: String,
  prioroty: String,
  status: String,
});

const UserModel = mongoose.model("Task", UserSchema);
module.exports = UserModel;
