var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
    name: String,
    image: String,  // "mega"
    country: String, // {type: Schema.Types.ObjectId, ref: 'Country'}, // Nationality?
    bio: String
});

module.exports.Artist = mongoose.model('artist', artistSchema);