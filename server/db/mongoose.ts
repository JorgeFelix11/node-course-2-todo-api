import * as mongoose from 'mongoose';
  
function mongooseConnection(){
    mongoose.connect("mongodb://localhost:27017/TodoApp");
    // mongoose.Promise = global.Promise;
 }

export {mongooseConnection}