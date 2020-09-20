'user strict';
const mongo = require('mongoose');

var userSchema = mongo.Schema ({
    name: String,
    email: String,
    password: String,
    role: [String]
})

var User = module.exports = mongo.model('User', userSchema, 'User');
