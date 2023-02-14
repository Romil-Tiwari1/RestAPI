/**
 * Layer: Routes
 * File: Todo-Routes.js
 * Description : Route class is responsible to identify request url for 
 * particular request made
 * @author : Romil Tiwari
 */

import express from 'express';
import * as todoController from '../controllers/todo-controller.js';

const router = express.Router();

router.route('/todolist')
    .get(todoController.index)
    .post(todoController.post);


router.route('/todolist/:id')
    .get(todoController.get)
    .put(todoController.update)
    .delete(todoController.remove);


export default router;