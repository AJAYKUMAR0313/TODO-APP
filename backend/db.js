const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(proccess.env.DB_URL);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
