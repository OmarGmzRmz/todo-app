// Connect to data base
const MongoClient = require('mongodb').MongoClient;

const HOST = 'localhost:27017';
const DATABASE = 'TodoApp'; // If 'TodoApp' database does not exist, then the MongoDB server will create the database if and only if e try to write data

// Connect
MongoClient.connect(`mongodb://${HOST}/${DATABASE}`, (error, db) => {
    if (error) {
       return console.log('Unable to connect to MongoDb server')
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        title: 'School hw',
        text: 'Do hw',
        subject: 'math',
        priority: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    }, (error, result) => {
        // Handle error
        if (error) {
            return console.log('Unable to insert document', error);
            throw error;
        }
        // Print the document that was inserted
        
        console.log(JSON.stringify(result.ops, undefined, 2))
    });
    db.collection('Users').insertOne({
        name: 'Omar Gomez',
        age: 18,
        likes: [
            'Soccer',
            'ladys',
            'videogames'
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    }, (error, result) => {
        // Handle error
        if (error) {
            return console.log('Unable to insert document', error);
            throw error;
        }
        // Print the document that was inserted
       
        console.log(JSON.stringify(result.ops, undefined, 2))
    });
    
    db.close();
});