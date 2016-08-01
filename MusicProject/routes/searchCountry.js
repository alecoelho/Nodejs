var modelCountry = require('../modules/country');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    var word = req.query.key;
    modelCountry.Country.find({'name': new RegExp('^' + word, 'i')}).sort({'name': 1}).exec(function (err, country) {
        var data = [];
        for (var i = 0; i < country.length; i++)
            data.push(country[i].name);
        res.end(JSON.stringify(data));
    });
});


module.exports = router;