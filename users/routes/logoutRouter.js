const express = require('express');

const logoutRouter = express.Router();
const {User} = require('../models');

logoutRouter.get('/', (req, res, next) => {
  console.log(req);
  req.shiva.reset();
  console.log("after reset");
  console.log(req);
  res.redirect('/asdf');
});

module.exports = {logoutRouter};
