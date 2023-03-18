const { Schema, model } = require('mongoose'); 

const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-zA-Z0-9]+@[a-zA-Z0-9]\.[a-zA-Z0-9]/
    },

    friends:[{
        type: Schema.ObjectId,
        ref: 'User',
    }],

    thoughts:[{
        type: Schema.ObjectId,
        ref: 'Thought',
    }],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
});


userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User',userSchema)

module.exports = User



