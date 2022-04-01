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
UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.reduce((total, thought) => total + thought.reactions.length + 1, 0);
});

// create the User model using UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;