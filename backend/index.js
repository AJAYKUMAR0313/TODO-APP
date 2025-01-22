const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  res.send("Hello World");
});

app.get("/todos", (req, res) => {
  res.send("Hello World");
});

app.put("/completed", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Listening on the server localhost:3000");
});
