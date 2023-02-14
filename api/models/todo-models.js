/**
 * Layer: Model
 * File: Todo.js 
 * Description : Here schema is defined that will be saved in the Database.
 * @author : Romil Tiwari
 */

import Mongoose from 'mongoose';

const schemaTodo = new Mongoose.Schema({
    "title": {
        type: String,
        required: true
    },

    "description": {
        type: String,
        required: true
    },

    "createdDate": {
        type: Date,
        default: Date.now
    },

    "lastModifiedDate": {
        type: Date,
        default: Date.now
    }
},

    {
        versionKey: false,
    });

const toDoModel = Mongoose.model('todoitems', schemaTodo);

export default toDoModel;