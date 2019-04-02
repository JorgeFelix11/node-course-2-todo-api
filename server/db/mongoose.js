"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
function mongooseConnection() {
    mongoose.connect("mongodb://localhost:27017/TodoApp");
    // mongoose.Promise = global.Promise;
}
exports.mongooseConnection = mongooseConnection;
