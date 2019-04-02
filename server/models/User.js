"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
});
var User = mongoose_1.model("User", UserSchema);
exports.User = User;
