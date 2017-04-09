const express = require('express'),
      session = require('express-session'),
      jsonParser = require('body-parser').json();

const {User} = require('../models');

const adminRouter = express.Router();

adminRouter.use(jsonParser);

const basicStrategy = new BasicStrategy(function(username, password, callback) {
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

passport.use(basicStrategy);
adminRouter.use(passport.initialize());

adminRouter.get('/',
  passport.authenticate('basic', {
    session: true,
    successRedirect: '/',
    failureRedirect: '/login'
  }),
  (req, res) => res.json({user: req.user.apiRep()})
);

module.exports = {adminRouter};
