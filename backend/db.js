const monggose = require("mongoose");
mongoose.connect("mongodb+srv://kkajaykumar0313:e7NYPAouisxaf5wl@TODO-APP/");

const todoSchema = mongoose.schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = monggose.model("todos", todoSchema);

module.exports = {
  todo,
};
