import {Mongoose, Document, Schema, model} from 'mongoose';

interface IUserModel extends Document {
  email: string
}

let UserSchema = new Schema({
  email: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  }
})

var User = model<IUserModel>("User", UserSchema, 'User');
export {User};