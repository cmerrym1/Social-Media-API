const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    thoughts: [],
    friends: []
});

// create the User model using UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;