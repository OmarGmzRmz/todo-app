const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

//Require database connections and models
/* const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
 */

const PORT = process.env.PORT || 3000;
const app = express();

// Use a middleware to parse the body of the request and response
app.use(bodyParser.json());

// POST /todos
/* app.post('/todos', (request, response) => {
    console.log('Request body', request.body);
    const todo = new Todo({
        ...(request.body)
    });
    todo.save().then((res) => {
        response.send(res);
    }, (err) => {
        response.status(400).send(err);
    });
});

// GET /todos:id GEtb todo by its unique identifier (id)
app.get('/todos/:id', (request, response) => {
    const routeParams = request.params;
    const todoId = routeParams.id;
    Todo.findById(todoId).then((todo) => {
        if (!todo) {
            return response.status(404).send();
        }
        response.send(todo);
    }, (err) => {
        response.status(400).send(err);
    });
});

  // GET /todos. Create all todos
app.get('/todos', (request, response) => {
    Todo.find().then((todos) => {
        response.send({todos});
    }, (err) => {
        response.status(400).send(err);
    });
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

// PATCH /todos/:id Update todo
app.patch('/todos/:id', (request, response) => {
    const routeParams = request.params;
    const todoId = routeParams.id;
    console.log(routeParams);
    Todo.findOneAndUpdate({_id: new ObjectID(todoId)}, request.body,
     {new: true}
     ).then((res) => {
        response.send(res);
     }).catch((err) => {
         response.send(err);
     });
});

//DELETE /todos/:id Delete todo.
app.delete('/todos/:id', (request, response) => {
    const routeParams = request.params;
    const todoId = routeParams.id;
    console.log(routeParams);
    Todo.findByIdAndRemove({_id: new ObjectID(todoId)}).then((res) => {
        response.send(res);
     }).catch((err) => {
         response.send(err);
     });
     
});
 */


// Export the app
module.exports = {
    app,
    Todo
};


