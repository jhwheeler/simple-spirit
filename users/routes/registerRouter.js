const {BasicStrategy} = require('passport-http'),
      express = require('express'),
      jsonParser = require('body-parser').json(),
      passport = require('passport');

const {User} = require('../models');

const registerRouter = express.Router();

registerRouter.use(jsonParser);

const strategy = new BasicStrategy(
  (username, password, cb) => {
    User
      .findOne({username})
      .exec()
      .then(user => {
        if (!user) {
          return cb(null, false, {
            message: 'No such user'
          });
        }
        if (user.password !== password) {
          return cb(null, false, 'Incorrect password');
        }
        return cb(null, user);
      })
      .catch(err => cb(err))
});

passport.use(strategy);

registerRouter.post('/', (req, res) => {
  if (!req.body) {
    return res.status(400).json({message: 'No request body'});
  }

  if (!('username' in req.body)) {
    return res.status(422).json({message: 'No username in request body'});
  }

  let {username, password, email} = req.body;

  if (typeof username !== 'string') {
    return res.status(422).json({message: 'Incorrect field type: username'});
  }

  username = username.trim();

  if (username === '') {
    return res.status(422).json({message: 'Incorrect field length: username'});
  }

  if (!(password)) {
    return res.status(422).json({message: 'No password in request body'});
  }

  if (typeof password !== 'string') {
    return res.status(422).json({message: 'Incorrect field type: password'});
  }

  password = password.trim();

  if (password === '') {
    return res.status(422).json({message: 'Incorrect field length: password'});
  }

  if (typeof email !== 'string') {
    return res.status(422).json({message: 'Incorrect field type: email'});
  }

  email = email.trim();

  if (email === '') {
    return res.status(422).json({message: 'Incorrect field length: email'});
  }

  // check for existing user
  return User
    .find({username})
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.status(422).json({message: 'Username taken'});
      }
      // if no existing user, hash password
      return User.hashPassword(password)
    })
    .then(hash => {
      return User
        .create({
          username: username,
          password: hash,
          email: email
        })
    })
    .then(user => {
      return res.status(201).json(user.apiRep());
    })
    .catch(err => {
      res.status(500).json({message: 'Internal Server Error'})
    });
});

module.exports = {registerRouter};