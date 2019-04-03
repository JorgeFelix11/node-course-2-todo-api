import * as mongoose from 'mongoose';
  
function mongooseConnection(){
    mongoose.connect("mongodb://localhost:27017/TodoApp");
 }

export {mongooseConnection}