const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if( err )
        return console.log('Unable to connect ot mongo', err);

    console.log('Connected to Mongo');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something todod',
    //     completed: false
    // }, (err, results) => {
    //     if( err )
    //       return console.log('Unable to insert', err);

    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Andy',
        age: 27,
        location: 'NJ'
    }, (err, results) => {
        if( err )
          return console.log('Unable to insert', err);

        console.log(JSON.stringify(results.ops, undefined, 2));
    });

    

    client.close();

});

