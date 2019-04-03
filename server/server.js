"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose_1 = require("./db/mongoose");
const Todo_1 = require("./models/Todo");
const mongodb_1 = require("mongodb");
let app = express();
mongoose_1.mongooseConnection();
let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    var todo = new Todo_1.Todo({
        text: req.body.text
    });
    todo.save().then(doc => {
        res.send(doc);
        console.log("Todo created thank yossu");
    }, e => {
        res.status(400).send(e);
    });
});
app.get('/todos', (req, res) => {
    Todo_1.Todo.find().then(todos => {
        res.send({ todos });
    }, e => {
        res.status(400).send(e);
    });
});
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!mongodb_1.ObjectID.isValid(id)) {
        console.log('Id not valid using isValid.');
        return res.status(404).send();
    }
    Todo_1.Todo.findById(id).then(todo => {
        if (!todo) {
            return res.status(404).send();
        }
        console.log(JSON.stringify(todo, undefined, 2));
        res.send({ todo });
    }).catch(e => res.status(400).send());
});
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
