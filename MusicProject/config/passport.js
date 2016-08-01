var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var models = require('../modules/user');
var modelUserCountry = require('../modules/user_country');
var modelCountry = require('../modules/country');
var configAuth = require('./auth');

module.exports = function(passport) {


	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		models.User.findById(id, function(err, user){
			done(err, user);
		});
	});

	passport.use(new FacebookStrategy({
	    clientID: configAuth.facebookAuth.clientID,
	    clientSecret: configAuth.facebookAuth.clientSecret,
	    callbackURL: configAuth.facebookAuth.callbackURL,
		profileFields: [ 'id', 'displayName', 'link', 'email' ],
		passReqToCallback: true,
		auth_type: "reauthenticate"
	  },
	  function(req, accessToken, refreshToken, profile, done) {
	    	process.nextTick(function(){
	    		models.User.findOne({'facebook.id': profile.id}, function(err, user){

					var sess;
					sess = req.session;

	    			if(err)
	    				return done(err);
	    			if(user)
					{
						modelUserCountry.UserCountry.findOne({ "user": user._id, "isHome": true }).exec(function (err, user_country) {
                
							setSession(sess, req, user);

							if (user_country == null) {
								return done(null, user);
							}
							else
							{
								modelCountry.Country.findOne({ "_id": user_country.country }).exec(function (err, country) {

									if (err) { 
										res.send('error has occured');
										return;
									}
									
									sess.homeCountry = country.name;
									return done(null, user);
								});
							}
						});
					}
	    			else {

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

	    				var newUser = new models.User();
						
						newUser.email = null;
						newUser.password = null;
						newUser.username = null;
			
	    				newUser.facebook.id = profile.id;
	    				newUser.facebook.token = accessToken;
	    				newUser.facebook.name = profile.displayName;
	    				newUser.facebook.email = profile.emails[0].value;

	    				newUser.save(function(err, fc_result){
	    					if(err)
	    						throw err;
							
							
							//INSERT COUNTRIES

							var newUserCountry;

							//Home
							if(homeCountry !== null)
							{
								   newUserCountry = new modelUserCountry.UserCountry({
									user: fc_result,
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
									user: fc_result,
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
									user: fc_result,
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
									user: fc_result,
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
									user: fc_result,
									country: country5,
									isHome: false
								});
								newUserCountry.save(function (err, result) {
								});
							}
							//FIM COUNTRIES

							setSession(sess, req, newUser);
							
							if(homeCountry != null)
								sess.homeCountry = homeCountry.name;

	    					return done(null, newUser);
	    				});
	    			}
	    		});
	    	});
	    }

	));
	
	function setSession(sess, req, user){
		sess.email = user.facebook.email;
		sess.displayName = user.facebook.name;
	}


};

