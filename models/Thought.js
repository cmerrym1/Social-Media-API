const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
  {
     // set custom id to avoid confusion with parent thought _id
     reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String
    },
    username: {
      type: String,
      required: true,
      trim:true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

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
  reactions: [ReactionSchema,
    {
        type: Schema.Types.ObjectId,
        ref: 'Reactions'
      }
  ]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;