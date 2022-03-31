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
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
          }
      ],
    friends: [],
},
    {
      toJSON: {
        virtuals: true,
      },
      id: false
    }

);

// get total count of reactions on retrieval
UserSchema.virtual('friendsCount').get(function() {
    return this.friends.length;
  });

// create the User model using UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;