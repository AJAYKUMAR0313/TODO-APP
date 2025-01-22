const monggose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.dbUrl);

const todoSchema = mongoose.schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = monggose.model("todos", todoSchema);

module.exports = {
  todo,
};
