/**
 * Title : App.js
 * Description : Establish the connection with DB
 * @author : Romil Tiwari
 */
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import models from './models/index.js';
import routes from './routes/index.js';
const app = express();

//Parse JSON Body
app.use(express.json());

//Allow Server to accept different request from different domain
app.use(express.urlencoded({ extended: false }));
app.use(cors());
routes(app);

mongoose.connect('mongodb://localhost:27017/todoitem');
export default app;