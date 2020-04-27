//ChatModel
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// Configure a new moongoose model and pass it using module.exports
var ChatSchema = new Schema({
  nickname:{
    type: String
  },
  message:{
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  }
},
{
  collection: 'ChatModel'
});

module.exports = mongoose.model('Chat', ChatSchema);