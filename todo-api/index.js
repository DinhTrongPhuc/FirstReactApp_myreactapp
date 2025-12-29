const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Fake database
let todos = [
  { id: 1, text: "Học React", completed: false },
  { id: 2, text: "Test API với Postman", completed: true },
];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST add todo
app.post("/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// PUT toggle todo
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  res.json({ success: true });
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.json({ success: true });
});

app.listen(3001, () => {
  console.log("API running at http://localhost:3001");
});
