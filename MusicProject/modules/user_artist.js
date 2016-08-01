var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserArtistSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
});

module.exports.UserArtist = mongoose.model('UserArtist', UserArtistSchema);