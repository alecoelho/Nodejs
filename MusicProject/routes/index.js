var modelCountry = require('../modules/country');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'LithiuMusic',
        navList: false
    });
});

router.get('/GetStart', function (req, res) {
    res.render('getStart', {
        title: 'Get started',
        navList: false
    });
});

router.get('/SetPreference', function (req, res) {
    res.render('musicPref', {
        title: 'Music Preference',
        navList: false
    });
});

router.get('/SignUp', function (req, res) {
    res.render('signUp', {
        title: 'Sign up',
        navList: false
    });
});

router.get('/SignIn', function (req, res) {
    res.render('signIn', {
        title: 'Sign in',
        navList: false
    });
});

router.get('/Home', function (req, res) {
    res.render('userHome', {
        title: 'Home',
        navList: false
    });
});

router.get('/Recommend', function (req, res) {
    res.render('recommend', {
        title: 'New Artists',
        navList: false
    });
});

router.get('/searchCountry', function (req, res) {
    var word = req.query.key;
    modelCountry.Country.find({'name': new RegExp('^' + word, 'i')}).sort({'name': 1}).exec(function (err, country) {
        var data = [];
        for (var i = 0; i < country.length; i++)
            data.push(country[i].name);
        res.end(JSON.stringify(data));
    });
});

router.get('/getCountry', function (req, res) {
    var name = req.query.name;
    modelCountry.Country.findOne({'name': name}).exec(function (err, country) {
        if (err) {
            console.err(err);
            throw err;
        }
        res.json(country);
    });
});

module.exports = router;

