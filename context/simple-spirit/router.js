const express = require('express'),
      jsonParser = require('body-parser').json(),
      mongoose = require('mongoose');

const {Maxim} = require('./models');
const {User} = require('./users/models');

mongoose.Promise = global.Promise;

const router = express.Router();

router.use(jsonParser);

router.get('/api/maxims', (req, res) => {
  Maxim
    .find()
    .sort({maximId: -1})
    .exec()
    .then(data => res.json(data))
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'})
      }
    );
});

router.get('/api/maxim/:maximId?', (req, res) => {
  if (req.params.maximId === undefined) {
    Maxim
      .find()
      .sort({maximId: -1})
      .limit(1)
      .exec()
      .then(data => res.json(data))
      .catch(err => {
          console.error(err);
          res.status(500).json({message: 'Internal Server Error'})
      });
  } else {
    Maxim
      .findOne({maximId: req.params.maximId})
      .exec()
      .then(data => res.json(data))
      .catch(
        err => {
          console.error(err);
          res.status(500).json({message: 'Internal Server Error'})
        }
      );
  }
});

router.post('/api/maxim', (req, res) => {

  const requiredFields = ['maximId', 'maxim', 'challenge'];
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
      date: date
    })
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});

router.put('/api/maxim/:maximId', (req, res) => {
  if (!(req.params.maximId && req.body.maximId && (req.params.maximId === req.body.maximId))) {
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

router.delete('/api/maxim/:maximId', (req, res) => {
  Maxim
    .findOneAndRemove({maximId: req.params.maximId})
    .exec()
    .then(data => res.status(204).json(data))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

module.exports = {router}
