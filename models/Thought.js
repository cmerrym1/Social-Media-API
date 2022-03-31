const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  username: {
    type: String
  },
  thoughtText: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  reactions: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Reactions'
      }
  ]
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// get total count of reactions on retrieval
//ThoughtSchema.virtual('reactionCount').get(function() {
    //return this.reactions.length;
  //});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;