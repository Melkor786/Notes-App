const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: {type: String, requred: true},
   password: {type: String, requred: true},
}, {timestamps: true});

module.exports = mongoose.model('User',userSchema)
