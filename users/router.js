const AuthenticationController = require('../authenticate/controller'),
      express = require('express'),
      passportService = require('../authenticate/passport'),
      passport = require('passport');

// middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

// constants for role types
const REQUIRE_ADMIN = "admin",
      REQUIRE_USER = "user";

module.exports = function(app) {
  //init route groups
  const apiRoutes = express.Router(),
        authRoutes = express.Router();

  // Auth Routes

  // set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);

  // registration route
  authRoutes.post('/api/users', AuthenticationController.register);

  // login route
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  // set url for API group routes
  app.use('/api', apiRoutes);
};
