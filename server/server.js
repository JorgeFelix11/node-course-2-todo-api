"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var mongoose_1 = require("./db/mongoose");
var Todo_1 = require("./models/Todo");
var app = express();
var port = 3000;
mongoose_1.mongooseConnection();
app.use(bodyParser.json());
app.post('/todos', function (req, res) {
    var todo = new Todo_1.Todo({
        text: req.body.text
    });
    todo.save().then(function (doc) {
        res.send(doc);
        console.log("Todo created thank youusseduu");
    }, function (e) {
        res.status(400).send(e);
    });
});
app.listen(port, function () {
    console.log('Started on port 3000');
});
