const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let todos = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(port, () => console.log(`Backend running at http://localhost:${port}`));
