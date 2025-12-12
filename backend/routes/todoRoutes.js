import { Router } from "express";
import { CreateTodo, DeleteTodo, getAllTodos, UpdateTodo,UpdateTodocomplete } from "../controller/todoController.js";



const router = Router();

router.get("/get",getAllTodos);
router.post('/create',CreateTodo);
router.put('/:id',UpdateTodo);
router.put('/status/:id',UpdateTodocomplete);
router.delete('/:id',DeleteTodo);

export default router;