const express = require('express'),
      sessions = require('client-sessions'),
      bodyParser = require('body-parser');

const {User} = require('../models');

const loginRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

loginRouter.use(urlencodedParser);

function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    let user;
    User
      .findOne({username: username})
      .exec()
      .then(_user => {
        user = _user;
        if (!user) {
          reject(false, {message: 'Incorrect username'});
        }
        return user.validatePassword(password);
      })
      .then(isValid => {
        if (!isValid) {
          reject(false, {messsage: 'Incorrect password'});
        }
        else {
          resolve(user);
        }
      });
  });
}

loginRouter.post('/', (req, res, next) => {
  let username = req.body.username,
      password = req.body.password;
  authenticateUser(username, password)
    .then(data => {
      data = data.toObject();
      delete data.password;
      req.shiva.user = data;
      console.log(data);
      res.redirect('/#/console');
    })
    .catch(
      err => {
        res.status(401).json({message: 'Failed to login'})
      }
    );
});

module.exports = {loginRouter};
