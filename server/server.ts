import express from 'express';
import bodyParser from 'body-parser';

import {mongooseConnection} from './db/mongoose';
import {Todo} from "./models/Todo";
import {User} from "./models/User";

let app = express();
let port = 3000;
mongooseConnection();
app.use(bodyParser.json())
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then(doc => {
    res.send(doc)
    console.log("Todo created")
  }, e => {
    res.status(400).send(e);
  })
})

app.listen(port, () => {
  console.log('Started on port 3000')
})