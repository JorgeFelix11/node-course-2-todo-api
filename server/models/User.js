"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
});
var User = mongoose_1.model("User", UserSchema, 'User');
exports.User = User;
