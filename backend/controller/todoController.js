import { Todo } from "../modles/todoModel.js";

export const getAllTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.json({ success: true, data: todos });
};

export const CreateTodo = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.json({ success: false, data: "enter title" });

  const createdtodo = await Todo.create({ title: title });
  res.json({
    success: true,
    data: { message: "todo created", todo: createdtodo },
  });
};

export const UpdateTodo = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  console.log(id, title);
  const updateTodo = await Todo.findByIdAndUpdate(id, { title }, { new: true });
  res.json({ success: true, data: "update todo" });
};







export const UpdateTodocomplete = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  console.log(id);
  const updateTodo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
  res.json({ success: true, data: "update todo" });
};

export const DeleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ success: true, data: "delete todo" });
};
