const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TaskModel = require("./models/Task");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/KanbanBoard");

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createTask", (req, res) => {
  TaskModel.create(req.body)
    .then((task) => res.json(task))
    .catch((err) => res.json(err));
});

app.get("/getAll", (req, res) => {
  TaskModel.find({})
    .then((task) => res.json(task))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
