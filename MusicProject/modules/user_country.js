var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserCountrySchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    country: {type: Schema.Types.ObjectId, ref: 'Country'},
    isHome: Boolean
});

module.exports.UserCountry = mongoose.model('UserCountry', UserCountrySchema);