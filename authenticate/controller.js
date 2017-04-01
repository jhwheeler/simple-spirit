const jwt = require('jsonwebtoken'),
      crypto = require('crypto'),
      User = require('../users/models.js'),
      {secret} = require('../config.js');

function generateToken(user) {
  return jwt.sign(user, secret, {
    expiresIn: 10080 //in seconds
  });
}

//Set user info from request
function setUserInfo(request) {
  return {
    _id: request._id,
    username: request.username,
    email: request.email,
    role: request.role
  };
}

// Login Route

exports.login = function(req, res, next) {
  let userInfo = setUserInfo(req.user);

  res.status(200).json({
    token: 'JWT' + generateToken(userInfo),
    user: userInfo
  });
}

// Registration Route

exports.register = function(req, res, next) {

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (!email) {
    return res.status(422).send({ error: `Please enter an email address.` });
  }

  if (!username) {
    return res.status(422).send({ error: `Please enter a username.` });
  }

  if (!password) {
    return res.status(422).send({ error: `Please enter a password.` });
  }

  User.findOne({ username: username }, function(err, existingUser) {
    if (err) { return next(err); }

    //if user is not unique, retur error
    if (existingUser) {
      return res.status(422).send({ error: `Sorry, that username is taken.`});
    }

    let user = new User({
      username: username,
      email: email,
      password: password
    });

    user.save(function(err, user) {
      if (err) { return next(err); }

      //subscribe member to mailchimp list
      // mailchimp.subscribeToNewsletter(user.email);

      // respond with JWT if user was created

      let userInfo = setUserInfo(user);

      res.status(201).json({
        token: 'JWT' + generateToken(userInfo),
        user: userInfo
      });
    });
  });
}

// Authorization Middleware

exports.roleAuthorization = function(role) {
  return function(req, res, next) {
    const user = req.user;

    User.findById(user._id, function(err, foundUser) {
      if (err) {
        res.status(422).json({ error: `No user was found.` });
        return next(err);
      }

      //if user found, check role
      if (foundUser.role == role) {
        return next();
      }

      res.status(401).json({ error: `You are not authorized to view this content` });
      return next(`Unauthorized`);
    })
  }
}

