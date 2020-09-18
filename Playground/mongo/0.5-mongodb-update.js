const {MongoClient, ObjectID} = require('mongodb');

const HOST = 'localhost:27017';
const DATABASE = 'TodoApp';

MongoClient.connect(`mongodb://${HOST}/${DATABASE}`, (error, db) => {
    if (error) {
       return console.log('Unable to connect to MongoDb server')
    }
    console.log('Connected to MongoDB server');

    const todosColletion = db.collection('Todos');

    // findOneAndUpdate. Update the first element that matches the query
    todosColletion.findOneAndUpdate({
        // Matching criterea. (filter by _id)
        _id: new ObjectID('5f485760b3d39d1f341725c8')
    }, {
        // Operations to perform to the matched document
        // For operators visit 
         $set: {completed: true}
    }, {
        // Options 
        // For more options visit
      //  http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
      returnOriginal: false // This give us the updated document
    }).then((res) => {
        console.log('Updated todo: ', res);
    }, (err) => {
        console.log('Unable to update the document', err);
    });

    // TODO: Tarea
    /* 
    1. Encontar un usuario por nombrey actualizar (hint: (findOneAndUpdate))
    2. Cambiar el nombre a sin nombre 
    3. vas a incrementar su edad en una unidad (hint: usar el operador $inc)
    4. que la query regrese el documento actualizado
    5. Imprimir el resultado al usuario (hint: utilizar .then(...))
    */

    // 1.
    
    todosColletion.findOneAndUpdate({
        user: 'Fulanito'
    }, {
    // 2.
        $set: {user: 'Sin nombre'} ,
    // 3.
        $inc: {age: 1}
    }, {
    // 4.
        returnOriginal: false
    }
    // 5.
    ).then((res) => {
        console.log('Updated todo: ', res);
    }, (err) => {
        console.log('Unable tu update the document', err);
    });

    db.close();
});