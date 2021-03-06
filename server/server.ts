import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as _ from 'lodash'
import {mongooseConnection} from './db/mongoose';
import {Todo} from "./models/Todo";
import {User} from "./models/User";
import { ObjectID } from 'mongodb';

let app = express();
mongooseConnection();
let port = process.env.PORT || 3000;
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

app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;
  if(!ObjectID.isValid(id)){
    console.log('Id not valid using isValid.')
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then(doc => {
    if(!doc){
      return res.status(404).send();
    }
    console.log(JSON.stringify(doc, undefined, 2))
    res.status(200).send(doc);
  }).catch(e => res.status(400).send())
})

app.patch('/todos/:id', (req,res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed', 'completedAt']);
  if(!ObjectID.isValid(id)){
    console.log('Invalid id')
    return res.status(404).send()
  }
  console.log(body)
  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo})
  }).catch(e => {
    res.status(400).send()
  })

})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

