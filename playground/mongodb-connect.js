// const MongoClient = require('mongodb').MongoClient //Without destructuring
const {MongoClient, ObjectID} = require('mongodb');
let obj = new ObjectID();
console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDB server")
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp');
  db.collection('Todos').insertOne({
    text: 'Two identical',
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('Unable to inser todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  //Insert new doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Jorge',
  //   age: 26,
  //   location: 'Tijuana'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   //console.log(JSON.stringify(result.ops, undefined, 2))
  //   console.log(result.ops[0]._id.getTimestamp())
  // })
  client.close();
})

// let user = {name: 'Jorge', age: 26}
// let {name} = user;
// console.log(name)