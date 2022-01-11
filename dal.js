const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'digiBank';
client.connect();

// console.log(client.connect())
console.log('Connected successfully to server');

//--Name of Database
const db = client.db(dbName);

function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result){
            err ? reject(err) : resolve(doc)
        })
    })
}

// find user account
function login(email, password){
    return new Promise((resolve, reject) => {    
        const user = db
            .collection('users')
            .find({email: email, password: password})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

function update(email, amount){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')            
            .findOneAndUpdate(
                {email: email},
                { $inc: { balance: amount}},
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );            


    });    
}


function all(){
    return new Promise((resolve, reject) => {
        const users = db.collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs)
            })
    })
}

// find user account
function currentUser(email){
    return new Promise((resolve, reject) => {    
        const user = db.collection('users')
            .findOne({email: email})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));    
    })
}

// update - deposit/withdraw amount


module.exports = {create, login, update, all, currentUser}
