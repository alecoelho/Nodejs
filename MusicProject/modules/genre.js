var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: String
});

module.exports.Genre = mongoose.model('genre', genreSchema);