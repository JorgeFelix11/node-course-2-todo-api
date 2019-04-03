"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../server/db/mongoose");
const mongodb_1 = require("mongodb");
const User_1 = require("../server/models/User");
mongoose_1.mongooseConnection();
let id = '5ca50b48ca2bcf155778bdab';
if (!mongodb_1.ObjectID.isValid(id)) {
    console.log('ID not valid');
}
User_1.User.findById(id).then(user => {
    if (!user)
        return console.log('No user with that id');
    console.log(JSON.stringify(user, undefined, 2));
}).catch(e => {
    console.log(e);
});
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
