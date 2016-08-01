var models = require('../modules/user');
var modelCountry = require('../modules/country');
var modelUserCountry = require('../modules/user_country');
var mongoose = require('mongoose');

module.exports.register = function (req, res) {
    var newUser = new models.User({

        email: req.body.email1,
        password: req.body.pwd1,
        username: req.body.nickName,

        facebook: {
            id: null,
            token: null,
            email: null,
            name: null,
            username: null
        }
    });

    var sess;
    sess = req.session;

    var homeCountry;
    var country2;
    var country3;
    var country4;
    var country5;

    if(sess.homeCountry !== null)
    {
        modelCountry.Country.findOne({ name: sess.homeCountry }, function (err, country) {
            homeCountry = country;
        });
    }

    if(sess.country2 !== null)
    {
        modelCountry.Country.findOne({ name: sess.country2 }, function (err, country) {
            country2 = country;
        });
    }

    if(sess.country3 !== null)
    {
        modelCountry.Country.findOne({ name: sess.country3 }, function (err, country) {
            country3 = country;
        });
    }

    if(sess.country4 !== null)
    {
        modelCountry.Country.findOne({ name: sess.country4 }, function (err, country) {
            country4 = country;
        });
    }

    if(sess.country5 !== null)
    {
        modelCountry.Country.findOne({ name: sess.country5 }, function (err, country) {
            country5 = country;
        });
    }

    newUser.save(function (err, result) {
        if (err) {
            req.send(500, err);
        }
        else {

            //INSERT COUNTRIES

            //Home
            if(homeCountry !== null)
            {
                var newUserCountry = new modelUserCountry.UserCountry({
                    user: result,
                    country: homeCountry,
                    isHome: true
                });

                newUserCountry.save(function (err, result) {
                });
            }

            //C2
            if(country2 !== null)
            {
                newUserCountry = new modelUserCountry.UserCountry({
                    user: result,
                    country: country2,
                    isHome: false
                });
                newUserCountry.save(function (err, result) {
                });
            }

            //C3
            if(country3 !== null)
            {
                newUserCountry = new modelUserCountry.UserCountry({
                    user: result,
                    country: country3,
                    isHome: false
                });
                newUserCountry.save(function (err, result) {
                });
            }

            //C4
            if(country4 !== null)
            {
                newUserCountry = new modelUserCountry.UserCountry({
                    user: result,
                    country: country4,
                    isHome: false
                });
                newUserCountry.save(function (err, result) {
                });
            }

            //C5
            if(country5 !== null)
            {
                newUserCountry = new modelUserCountry.UserCountry({
                    user: result,
                    country: country5,
                    isHome: false
                });
                newUserCountry.save(function (err, result) {
                });
            }
            //FIM COUNTRIES

            sess = req.session;
            res.cookie('username', result.username);

            if(homeCountry != null)
                res.cookie('homeCountry', homeCountry.name);

            res.redirect('/Home');
        }
    });
};
