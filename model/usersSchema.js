const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        lowercase: true,
        trim: true,
        unique: true
    },
    email : {
        type: String,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please add a valid email address.'],
        required: [true, 'Please enter Email Address'],
        unique: true,
        lowercase: true,
        dropDups: true
    },
    password:{
        type: String,
    }
})

module.exports = mongoose.model('user',userSchema)