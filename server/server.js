"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = require("./db/mongoose");
const Todo_1 = require("./models/Todo");
let app = express_1.default();
let port = 3000;
mongoose_1.mongooseConnection();
app.use(body_parser_1.default.json());
app.post('/todos', (req, res) => {
    var todo = new Todo_1.Todo({
        text: req.body.text
    });
    todo.save().then(doc => {
        res.send(doc);
        console.log("Todo created");
    }, e => {
        res.status(400).send(e);
    });
});
app.listen(port, () => {
    console.log('Started on port 3000');
});
