"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res
        .status(201)
        .json({ message: "TODOを作成しました。", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした。");
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updateText);
    res
        .status(201)
        .json({ message: "更新しました。", updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした。");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "TODOを削除しました。" });
};
exports.deleteTodo = deleteTodo;
