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
  db.collection('Users').deleteMany({name: "Jorge"}).then(result => {
    console.log(result);
  }, err => {
    if(err) return console.log(err)
  });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5c9e689af12b074cfa4e315e')
  }).then(result => {
    console.log(result)
  }, err => {
    if(err) return console.log(err)
  })
  // client.close();
})
