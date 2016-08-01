var User = require('../modules/user');
module.exports = function(app, passport){

    app.get('/auth/facebook', passport.authenticate('facebook', {authType: 'reauthenticate', session: false, scope: ['email']}));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { authType: 'reauthenticate', session: false, failureRedirect: "/" }),

        function(req, res) {
            var sess;
            sess = req.session;
            res.cookie('username', sess.displayName);
            res.cookie('homeCountry', sess.homeCountry);

            res.redirect('/Home');
        }
    );


    app.get('/signOut', function(req, res){
        res.clearCookie('username');
        res.clearCookie('homeCountry');
        req.logout();
        res.redirect('/');

        req.session.destroy();
    });
};

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/vasco');
}
