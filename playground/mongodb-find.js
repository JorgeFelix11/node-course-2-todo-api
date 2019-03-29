// const MongoClient = require('mongodb').MongoClient //Without destructuring
const {MongoClient, ObjectID} = require('mongodb');
// let obj = new ObjectID();
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDB server")
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp');
  // db.collection('Todos').find({completed: false}).toArray().then(docs => { //will query every object(document) with a property of completed set to false
  db.collection('Users').find({name: "Jorge"}).toArray().then(docs => {
    // console.log(`Todos count: ${count}`)
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => {
    if(err) return console.log('Unable to fetch Todos', err)
  })
  // client.close();
})

// let user = {name: 'Jorge', age: 26}
// let {name} = user;
// console.log(name)