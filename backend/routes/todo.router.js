import { Router } from "express";
import { createtodo } from "../controllers/todo_controllers/create_todo.js";
import { deleteTodo } from "../controllers/todo_controllers/deletetodo.js";
import { gettodo } from "../controllers/todo_controllers/get_todo.js";

const todo_router = Router();

todo_router.post("/", createtodo);

todo_router.get("/", gettodo);

todo_router.delete("/:id", deleteTodo);

export default todo_router;
