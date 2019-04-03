import {mongooseConnection} from '../server/db/mongoose';
import {ObjectID} from 'mongodb';
import {Todo} from '../server/models/Todo';
import {User} from '../server/models/User';
mongooseConnection()


let id = '5ca50b48ca2bcf155778bdab';
if(!ObjectID.isValid(id)){
  console.log('ID not valid')
}
User.findById(id).then(user => {
  if(!user) return console.log('No user with that id')
  console.log(JSON.stringify(user, undefined, 2));
}).catch(e => {
  console.log(e)
})
// let id = '5ca4fe0299a965148e73c53d11';
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid')
// }
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos ', todos)
// })
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo ', todo)
// })

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('There are no documents with that id')
//   }
//   console.log('Todo by Id ', todo)
// }).catch(e => console.log(e))