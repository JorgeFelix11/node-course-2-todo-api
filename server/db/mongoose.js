"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
function mongooseConnection() {
    mongoose.connect("mongodb://localhost:27017/TodoApp");
}
exports.mongooseConnection = mongooseConnection;
