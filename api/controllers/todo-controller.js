/**
 * Layer : Controller
 * File : Todo-Controller.js
 * Description : Create API request for the TODO App depending on the operation perfromed
 * @author : Romil Tiwari
 */

import { response } from 'express';
import * as TodoService from '../services/todo-services.js';

// Error Handling 
const errorhandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
};

// Success Response Handling
const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
}

// API Request : To get data from DB for scpecific ID
export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = await TodoService.get(id);
        setSuccessResponse(todo, response);
    } catch (error) {
        errorhandler(error.message, response);
    }
};

// API Request : To Save data in DB
export const post = async (request, response) => {
    try {
        const todo = { ...request.body };
        const newTodo = await TodoService.create(todo);
        setSuccessResponse(newTodo, response);
    } catch (e) {
        errorhandler(e.message, response);
    }
};

// API Request : To Update an exisitng ID in DB
export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = { ...request.body, id };
        const updateTodo = await TodoService.update(todo);
        setSuccessResponse(updateTodo, response);
    } catch (error) {
        errorhandler(error.message, response);
    }
};

// API Request : To get all data from DB
export const index = async (request, response) => {
    try {
        const todos = await TodoService.search();
        setSuccessResponse(todos, response);
    } catch (e) {
        errorhandler(e.message, response);
    }

};

// API Request : To Remove an exisitng ID from DB
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = await TodoService.remove(id);
        setSuccessResponse({ message: `Todo ${id} deleted successfully!` }, response);
    } catch (error) {
        errorhandler(error.message, response);
    }
};