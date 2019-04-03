import * as express from 'express';
import * as bodyParser from 'body-parser';

import {mongooseConnection} from './db/mongoose';
import {Todo} from "./models/Todo";
import {User} from "./models/User";

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
app.listen(3000, () => {
  console.log('Started on port 3000')
})

