"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function mongooseConnection() {
    mongoose_1.default.connect("mongodb://localhost:27017/TodoApp");
    mongoose_1.default.Promise = global.Promise;
}
exports.mongooseConnection = mongooseConnection;
