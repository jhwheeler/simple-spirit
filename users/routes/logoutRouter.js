const express = require('express'),
      session = require('client-sessions');;

const logoutRouter = express.Router();
const {User} = require('../models');

logoutRouter.get('/', (req, res, next) => {
  delete req.headers.cookie;
  res.redirect('/');
});

module.exports = {logoutRouter};
