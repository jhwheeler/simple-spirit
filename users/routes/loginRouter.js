const {BasicStrategy} = require('passport-http'),
      express = require('express'),
      jsonParser = require('body-parser').json(),
      passport = require('passport');

const {User} = require('../models');


const strategy = new BasicStrategy(function(username, password, callback) {
  console.log(arguments);
  let user;
  User
    .findOne({username: username})
    .exec()
    .then(_user => {
      console.log(_user);
      user = _user;
      if (!user) {
        return callback(null, false, {message: 'Incorrect username'});
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      console.log(isValid);
      if (!isValid) {
        return callback(null, false, {messsage: 'Incorrect password'});
      }
      else {
        return callback(null, user)
      }
    });
});

passport.use(strategy);

loginRouter.post('/',
  passport.authenticate('basic',
    {
      session: true,
      successRedirect: '/console',
      failureRedirect: '/login'
    }
  )
);

module.exports = passport;
