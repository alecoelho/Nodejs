var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String,
        username: String
  }
});

module.exports.User = mongoose.model('User', UserSchema);