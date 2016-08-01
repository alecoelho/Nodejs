var models = require('../modules/user');
var modelUserCountry = require('../modules/user_country');
var modelCountry = require('../modules/country');

module.exports.signIn = function (req, res) {

    models.User.findOne({"email": req.body.email, "password": req.body.pwd}).exec(function (err, result) {
        if (err) {
            res.send('error has occured');
        }
        else {
            if (result == null) {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.write('User not found!');
                res.end();
            }
            else {
                modelUserCountry.UserCountry.findOne({
                    "user": result._id,
                    "isHome": true
                }).exec(function (err, user_country) {

                    var sess;
                    sess = req.session;
                    sess.email = result.email;
                    res.cookie('username', result.username);

                    if (user_country == null) {
                        res.redirect('/Home');
                    }
                    else {
                        modelCountry.Country.findOne({"_id": user_country.country}).exec(function (err, country) {

                            if (err) {
                                res.send('error has occured');
                                return;
                            }

                            res.cookie('homeCountry', country.name);
                            res.redirect('/Home');
                        });
                    }
                });
            }
        }
    });
};