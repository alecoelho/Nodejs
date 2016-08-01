var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema({
    name: String,
    users: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports.Country = mongoose.model('country', countrySchema);