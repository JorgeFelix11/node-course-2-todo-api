"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose_1 = require("./db/mongoose");
const Todo_1 = require("./models/Todo");
let app = express();
mongoose_1.mongooseConnection();
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
app.listen(3000, () => {
    console.log('Started on port 3000');
});
