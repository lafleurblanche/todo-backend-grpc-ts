import express, { Request, Response } from 'express';
import cors from 'cors';
import { Todo } from './types';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let todos: Todo[] = [
  { text: 'Todo 1', completed: false },
  { text: 'Todo 2', completed: true },
  { text: 'Todo 3', completed: false },
];

app.get('/todos', (req: Request, res: Response) => {
  res.json(todos);
});

app.post('/todos', (req: Request, res: Response) => {
  todos.push(req.body);
  res.json(todos);
});

app.put('/todos/:index', (req: Request, res: Response) => {
  const index = parseInt(req.params.index);
  todos[index] = req.body;
  res.json(todos);
});

app.delete('/todos/:index', (req: Request, res: Response) => {
  const index = parseInt(req.params.index);
  todos = todos.filter((_, i) => i !== index);
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
