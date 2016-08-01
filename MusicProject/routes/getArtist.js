var express = require('express');
var request = require("request");
var router = express.Router();

router.get('/', function (req, res) {
    var apiKey = "9f449a487fa16315cc8091357b1ab0c0";
    var artist = req.query.artist;
    var query = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=" + apiKey + "&format=json";

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
