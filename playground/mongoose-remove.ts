import {mongooseConnection} from '../server/db/mongoose';
import {ObjectID} from 'mongodb';
import {Todo} from '../server/models/Todo';
import {User} from '../server/models/User';

mongooseConnection();

Todo.findByIdAndRemove('5ca65319be6be5cd9004168f').then(todo => console.log(todo))