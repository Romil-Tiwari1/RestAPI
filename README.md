# Assignment-7-base

Base repo for assignment 7

# Name of the Assignment:

Assignment 7 - Nodejs/Express REST API

# Description

Create a simple Nodejs/Express REST API for a simple to-do app.
 
# Assignment Requirement:

## User Requirements:

1. As a developer, I should be able to fetch all existing to-do items using Todo Resource.
2. As a developer, I should be able to add a to-do item using Todo Resource.
3. As a developer, I should be able to update a to-do item using Todo Resource.
4. As a developer, I should be able to delete a to-do item using Todo Resource. 

## Technical Requirements:

1. The goal of this assignment is to learn about Nodejs and REST API.
2. Use the express framework for developing the endpoints.
3. Use MongoDB for the persistence layer.
4. A todo object has id, title, description, createdDate, & lastModifiedDate properties.

# Assignment Grading

1. Code documentation. (10 Points).
2. .gitignore, README.md, and multiple Git commits (10 Points)
3. If the correct HTTP request method is not used. (-10 points for each wrong request method)If the controller, services, and model layer are not created. (-10 points for each missing layer)
4. Assignment completion. (80 Points)

# Folder Structure

1. 'api' folder contains controllers, models, routes, services directories which contains .js files respective to each layer.
2. .gitignore file.
3. README.md file.

# Project Run guidelines:

1. Download/clone the repository.
2. Open a terminal at the file location.
3. Create a 'data' folder in the BIN directory of the MongoDB
4. In the MongoDB BIN folder, run command: mongod --dbpath ../../data
5. In the folder structure, run command: npm install and npm i express cors debug mongoose --save
6. Then run the command: node server.js
7. Try POST, GET, PUT, DELETE in Postman at http://localhost:3000/todolist
8. Check the changes in the MongoDB Compass 'todoitem.todoitems'

# Contributor

| Northeastern-ID | Name | Email-ID 
| --- | --- | --- 
|002771759 | Romil Tiwari | tiwari.rom@northeastern.edu