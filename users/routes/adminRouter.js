const express = require('express'),
      sessions = require('client-sessions'),
      jsonParser = require('body-parser').json();

const {User} = require('../models');
const {loginRouter} = require('./loginRouter');

const adminRouter = express.Router();

adminRouter.use(jsonParser);

function adminRedirect(username, password) {
  return new Promise((resolve, reject) => {
    console.log(arguments);
    let user;

    if (req.shiva && req.shiva.user) {
      console.log(req.shiva);
      //check for username in db
      User
        .findOne({username: username})
        .exec()
        .then(_user => {
          user = _user;
          if (!user) {
            reject(false, {message: 'No such username'});
          }
          return user;
        })
      //check whether role is `admin`
        .then(user => {
          if (user.role != 'admin'){
            req.shiva.reset();
            res.redirect('/login');
          } else {
            resolve(user);
          }
        })
    } else {
      res.redirect('/login');
    }
  })
}

adminRouter.post('/', (req, res, next) => {
  let username = req.body.username,
      role = req.body.role;
  adminRedirect(username, password)
    .then(data => {
      res.redirect('/console');
    })
    .catch(
      err => {
        console.error(err);
        res.status(401).json({message: 'Failed to login'})
      }
    );
});

module.exports = {adminRouter};
