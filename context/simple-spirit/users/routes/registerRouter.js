const express = require('express'),
      jsonParser = require('body-parser').json();

const {User} = require('../models');

const registerRouter = express.Router();

registerRouter.use(jsonParser);

registerRouter.post('/', (req, res) => {
  let {username, password, email} = req.body;
  const requiredFields = ['username', 'email', 'password'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  User
    .find({username})
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.status(422).json({message: 'Username taken'});
      }
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
    .then(data => res.status(201).json(data))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});

module.exports = {registerRouter};
