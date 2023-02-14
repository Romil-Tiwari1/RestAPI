/**
 * Layer: Services
 * Description : Here we declare all the database actions that will be performed by the API
 * @author : Romil Tiwari
 */

import { REPL_MODE_SLOPPY } from "repl";
import Todo from "../models/todo-models.js";

// Get : Get ID from DB
export const get = async (id) => {
    const getTodo = Todo.findById(id).exec();
    return getTodo;
}


// Create : Create Data in DB
export const create = async (todo) => {
    const newTodos = new Todo(todo);
    return newTodos.save();
}


// Update : Update existing Data in DB
export const update = async (todo) => {
    todo._id = todo.id;
    const old_todo = Todo.findById(todo._id).exec();
    todo.createdDate = old_todo.createdDate;
    todo.lastModifiedDate = new Date();
    const promise = Todo.findByIdAndUpdate(todo.id, todo, { new: true }).exec();
    return promise;
}


// Search : Fetch Data from DB
export const search = async (query) => {
    const params = { ...query };
    const todos = Todo.find(params).exec();
    return todos;
};


// Remove : Remove Data from DB
export const remove = async (id) => {
    const todos = Todo.findByIdAndRemove(id).exec();
    return todos;
}