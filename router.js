const express = require('express'),
      jsonParser = require('body-parser').json(),
      mongoose = require('mongoose');

const {Koan} = require('./models');
const {User} = require('./users/models');

mongoose.Promise = global.Promise;

const router = express.Router();

router.use(jsonParser);

router.get('/api/koans', (req, res) => {
  Koan
    .find()
    .sort({koanId: -1})
    .exec()
    .then(data => res.json(data))
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'})
      }
    );
});

router.get('/api/koan/:koanId?', (req, res) => {
  if (req.params.koanId === undefined) {
    Koan
      .find()
      .sort({koanId: -1})
      .limit(1)
      .exec()
      .then(data => res.json(data))
      .catch(err => {
          console.error(err);
          res.status(500).json({message: 'Internal Server Error'})
      });
  } else {
    Koan
      .findOne({koanId: req.params.koanId})
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

router.post('/api/koan', (req, res) => {

  const requiredFields = ['koanId', 'koan', 'challenge'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  const date = new Date();

  Koan
    .create({
      koanId: req.body.koanId,
      koan: req.body.koan,
      challenge: req.body.challenge,
      date: date
    })
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});

router.put('/api/koan/:koanId', (req, res) => {
  if (!(req.params.koanId && req.body.koanId && (req.params.koanId === req.body.koanId))) {
    const message = (
      `Request path id (${req.params.koanId}) and request body id ` +
      `(${req.body.koanId}) must match`);
    console.error(message);
    res.status(400).json({message: message});
  }

  const toUpdate = {};
  const updateableFields = ['koanId', 'koan', 'challenge', 'date']

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  Koan
    .findOneAndUpdate({koanId: req.params.koanId}, {$set: toUpdate})
    .exec()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
});

router.delete('/api/koan/:koanId', (req, res) => {
  Koan
    .findOneAndRemove({koanId: req.params.koanId})
    .exec()
    .then(data => res.status(204).json(data))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

module.exports = {router}
