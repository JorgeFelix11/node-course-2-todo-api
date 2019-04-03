import {Mongoose, Document, Schema, model} from 'mongoose';

interface ITodoModel extends Document {
  text: string,
  completed: boolean,
  completedAt: number
}

var todoSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

var Todo = model<ITodoModel>("child", todoSchema);
export {Todo};
