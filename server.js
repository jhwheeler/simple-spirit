const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      passport = require('passport');

const {adminRouter} = require('./users/routes/adminRouter'),
      {loginRouter} = require('./users/routes/loginRouter'),
      {registerRouter} = require('./users/routes/registerRouter'),
      {PORT, DATABASE_URL} = require('./config'),
      {router} = require('./router');

const app = express();
const path = require('path');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(passport.initialize());
app.use(passport.session());

app.post('/blah', (req, res, next) => {
  passport.authenticate('basic', (err, user, info) => {
    console.log('test');
  })(req, res, next);
});

app.use('/api/users/', registerRouter);
// app.use('/login', loginRouter);
app.use('/console', adminRouter);

app.use('/', router);

app.get(['/login', '/register', '/about', '/archive', '/maxim/:maximId', '/console'], (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))});


function runServer(databaseUrl=DATABASE_URL, port=PORT) {

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
         if (err) {
           return reject(err);
         }
         resolve();
       });
     });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
