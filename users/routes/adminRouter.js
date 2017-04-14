const express = require('express'),
      path = require('path');

const adminRouter = express.Router();
const {User} = require('../models');

adminRouter.get('/', (req, res, next) => {
  User
    .findOne({username: req.shiva.user.username})
    .exec()
    .then(data => {
      if (!data || data.role != "admin") {
        req.shiva.reset();
        res.redirect('/login');
      } else {
        res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'))
      }
    })
});

module.exports = {adminRouter};
