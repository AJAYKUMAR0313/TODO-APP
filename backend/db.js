const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://kkajaykumar0313:e7NYPAouisxaf5wl@cluster0.1hvre.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
