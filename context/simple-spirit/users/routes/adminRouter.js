const express = require('express'),
      path = require('path');

const adminRouter = express.Router();
const {User} = require('../models');

adminRouter.get('/', (req, res, next) => {
  if (req.shiva.user) {
    User
      .findOne({username: req.shiva.user.username})
      .exec()
      .then(data => {
        if (!data || data.role != "admin") {
          req.shiva.reset();
          res.redirect('/login?You must be an admin.');
        } else {
          res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'))
        }
      })
  } else {
    res.redirect('/login');
  }
});

module.exports = {adminRouter};
