import * as express from 'express';
import * as bodyParser from 'body-parser';

import {mongooseConnection} from './db/mongoose';
import {Todo} from "./models/Todo";
import {User} from "./models/User";
import { ObjectID } from 'mongodb';

let app = express();
mongooseConnection();

app.use(bodyParser.json())
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then(doc => {
    res.send(doc)
    console.log("Todo created thank yossu")
  }, e => {
    res.status(400).send(e);
  })
})

app.get('/todos', (req,res) => {
  Todo.find().then(todos => {
    res.send({todos})
  }, e => {
    res.status(400).send(e)
  })
})

app.get('/todos/:id', (req,res) =>{
  let id = req.params.id;
  if(!ObjectID.isValid(id)){
    console.log('Id not valid using isValid.')
    return res.status(404).send();
  }
  Todo.findById(id).then(todo => {
    if(!todo){
      return res.status(404).send();
    }
    console.log(JSON.stringify(todo, undefined, 2))
    res.send({todo})
  }).catch(e => res.status(400).send())
})
app.listen(3000, () => {
  console.log('Started on port 3000')
})

