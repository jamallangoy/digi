const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'digiBank';
client.connect();

// console.log(client.connect())
console.log('Connected successfully to server');

//--Name of Database
const db = client.db(dbName);

//--New User
const name = 'user' + Math.floor(Math.random() * 10000);
const email = name + '@mit.edu';


//--Insert into Collection of Customer Table
const collection = db.collection('users');
const doc = {name, email};
collection.insertOne(doc, {w:1}, (err, result) => {
    console.log('Document insert');
})

const users = db
    .collection('users')
    .find()
    .toArray((err, docs) => {
        console.log('Collection: ', docs)

        // clean up
        client.close()
    })


// const myClients = db.collection('myMongo');

// var clients = await myClients.find().toArray()
// console.log(`Found Client =>`, clients)


// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbName = 'myproject';

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to database');
//     const db = client.db(dbName);
  
//     // the following code examples can be pasted here...

//         var name = "Gary"
//         var email = name + "@gmail.com"

//         var collection = db.collection('customers');
//         var doc = {name, email};
//         collection.insertOne(doc, {w:1}, (err, result) =>{
//         console.log('Document Inserted', doc)
//   })

//         var customers = db.collection('customers')
//         .find()
//         .toArray((err, docs)=>{
//             console.log('Collection:', customers)
//         })
  
//     return 'done.';
//   }

//   main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
