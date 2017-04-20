const express = require('express'),
      bodyParser = require('body-parser'),
      sessions = require('client-sessions'),
      mongoose = require('mongoose'),
      path = require('path');

const {adminRouter} = require('./users/routes/adminRouter'),
      {loginRouter} = require('./users/routes/loginRouter'),
      {registerRouter} = require('./users/routes/registerRouter'),
      {logoutRouter} = require('./users/routes/logoutRouter'),
      {PORT, DATABASE_URL} = require('./config'),
      {router} = require('./router');

const app = express();

mongoose.Promise = global.Promise;

app.use(require('express-status-monitor')());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'front-end', 'public')));

app.use(sessions({
  cookieName: 'shiva',
  secret: 'bM%Qf4mLJa!pnzS*hy-Jdu@e',
  duration: 10 * 60 * 1000,
  activeDuration: 1000 * 60 * 10
}));

app.use('/api/users/', registerRouter);
app.use('/login', loginRouter);
app.use('/console', adminRouter);
app.use('/logout', logoutRouter);
app.use('/', router);


app.get(['/login', '/register', '/about', '/archive', '/koan/:koanId'], (req, res) => {
  res.sendFile(path.resolve(__dirname, 'front-end', 'public', 'index.html'))});


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
