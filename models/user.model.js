//UserModel
// Instance of  mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Configure a new moongosee model and pass it using module.exports
var UserSchema = new Schema({
  nickname : {
    type: String,
    required : true
  },
  online : {
    type: Boolean,
    default: true
  }
},
{
  collection: 'UserModel'
});
module.exports = mongoose.model('User', UserSchema);