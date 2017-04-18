const express = require('express'),
      session = require('client-sessions');;

const logoutRouter = express.Router();
const {User} = require('../models');

logoutRouter.get('/', (req, res, next) => {
  req.shiva.reset();
  res.redirect('/');
});

module.exports = {logoutRouter};
