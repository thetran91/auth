const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:2308/auth_db");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
})

const User = mongoose.model('User', userSchema );
module.exports = {User}