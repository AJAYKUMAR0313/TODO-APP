const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const Todo = require("./db");

const app = express();

app.use(express.json());
app.use(cors({}));

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent Wrong Inputs",
    });
    return;
  }

  //put it in mongodb
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({ todos });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent Wrong Inputs",
    });
    return;
  }
  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Listening on the server localhost:3000");
});
