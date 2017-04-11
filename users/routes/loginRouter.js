const express = require('express'),
      session = require('express-session'),
      jsonParser = require('body-parser').json();

const {User} = require('../models');

const loginRouter = express.Router();

loginRouter.use(jsonParser);

function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    console.log(arguments);
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
    .then(data => res.json(
      {
        "username": data.username,
        "role": data.role
      })
    )
    .catch(
      err => {
        console.error(err);
        res.status(401).json({message: 'Failed to login'})
      }
    );
});

loginRouter.get('/console', (req, res, next) => {
  let username = req.body.username,
      password = req.body.password
      role = req.body.role;

  authenticateUser(username, password)
    .then(data => {
      if (role = "admin") {
        return res.status(200);
      } else {
        router.redirect('/login');
      }
    })
})

module.exports = {loginRouter};
