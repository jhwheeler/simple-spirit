const passport = require('passport'),
      User = require('../users/models'),
      {secret} = require('../config'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local');

const localLogin = new LocalStrategy(function(email, password, done) {
  User.findOne({ username: username}, function(err, user) {
    if (err) { return done(err); }
    if (!user) {return done(null, false, { error: `Your login details couldn't be verified: there is no such user` }); }

    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false, { error: `That password is incorrect`}); }

      return done(null, user);
    });
  });
});

const jwtOptions = {
  //Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  //Telling Passport where to find the secret
  secretOrKey: secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findbyId(payload._id, function(err, user) {
    console.log(payload);
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

module.exports = {
  localLogin: localLogin,
  jwtOptions: jwtOptions,
  jwtLogin: jwtLogin
}
