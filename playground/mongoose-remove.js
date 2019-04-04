"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../server/db/mongoose");
const Todo_1 = require("../server/models/Todo");
mongoose_1.mongooseConnection();
Todo_1.Todo.findByIdAndRemove('5ca65319be6be5cd9004168f').then(todo => console.log(todo));
