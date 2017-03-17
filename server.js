const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const app = express();
const path = require('path');
app.use(bodyParser.json());

const {PORT, DATABASE_URL} = require('./config');
const {Maxim} = require('./models');

app.use(express.static('public'));
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))});

app.get('/maxims', (req, res) => {
  Maxim
    .find()
    .sort({maximId: -1})
    .exec()
    .then(data => res.json(data))
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'})
    });
})

app.get('/maxim/:maximId', (req, res) => {
  Maxim
    .findOne({maximId: req.params.maximId})
    .exec()
    .then(data => res.json(data))
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'})
    });
})


app.post('/maxim', (req, res) => {

  const requiredFields = ['maximId', 'maxim', 'challenge', 'date'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  const date = new Date();

  Maxim
    .create({
      maximId: req.body.maximId,
      maxim: req.body.maxim,
      challenge: req.body.challenge,
      date: date})
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});

app.put('/maxim/:maximId', (req, res) => {
  if (!(req.params.maximId && req.body.maximId && parseInt(req.params.maximId) === req.body.maximId)) {
    const message = (
      `Request path id (${req.params.maximId}) and request body id ` +
      `(${req.body.maximId}) must match`);
    console.error(message);
    res.status(400).json({message: message});
  }

  const toUpdate = {};
  const updateableFields = ['maximId', 'maxim', 'challenge', 'date']

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  Maxim
    .findOneAndUpdate({maximId: req.params.maximId}, {$set: toUpdate})
    .exec()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
});

app.delete('/maxim/:maximId', (req, res) => {
  Maxim
    .findOneAndRemove({maximId: req.params.maximId})
    .exec()
    .then(data => res.status(202).json(data))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

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
