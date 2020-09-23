const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const HOST = 'localhost:27017';
const DATABASE = 'TodoApp';

mongoose.connect(`mongodb://nodejs-todo-app-no-auth:0TKxQMyxiL5h35fIjckKbWjsRDWX2ftZojizGT2MsZ6nqDuP7qZXvQcE9o8mXktR4OHkczfSiGRAUWpCnUZFLg%3D%3D@nodejs-todo-app-no-auth.mongo.cosmos.azure.com:10255/?ssl=true&appName=@nodejs-todo-app-no-auth@`);

module.exports = {mongoose};