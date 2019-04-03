import * as mongoose from 'mongoose';
  
function mongooseConnection(){
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp");
 }

export {mongooseConnection}