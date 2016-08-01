var express = require('express');
var request = require("request");
var router = express.Router();
var Chance = require('chance');

router.get('/', function (req, res) {
    var chance = new Chance();
    var apiKey = "9f449a487fa16315cc8091357b1ab0c0";
    var aCountry = chance.country({full: true});

    var query = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=" + aCountry + "&api_key=" + apiKey + "&format=json&page=1&limit=10";

    request({
        encoding: null,
        url: query,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });


});

module.exports = router;
