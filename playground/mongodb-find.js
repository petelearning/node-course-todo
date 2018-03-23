const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    
    const db = client.db('TodoApp');

    if( err )
        return console.log('Unable to connect ot mongo', err);

    console.log('Connected to Mongo');

    // db.collection('Todos').find({

    //     _id: new ObjectID("5ab43a06debeb625b0551dd3")
    //     }).toArray().then( (docs) => {
    //     console.log(JSON.stringify(docs,undefined,2));
    // },
    // (err) => {
    //     console.log('Uanable to fetch', err)
    // });
    
    db.collection('Todos').find().count().then( (count) => {
        console.log(count);
    },
    (err) => {
        console.log('Uanable to fetch', err)
    });

    //db.close();

});

    
    




