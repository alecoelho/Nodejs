var modelArtist = require('../modules/artist');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    var word = req.query.key;
    modelArtist.Artist.find({'name': new RegExp('^' + word, 'i')}).sort({'name': 1}).exec(function (err, artist) {
        var data = [];
        for (var i = 0; i < artist.length; i++)
            data.push(artist[i].name);
        res.end(JSON.stringify(data));
    });
});

module.exports = router;