const mongoose = require('mongoose');

const maximSchema = mongoose.Schema({
  maximId: {type: String, required: true},
  maxim: {type: String, required: true},
  challenge: {type: String, required: true},
  date: Date
});

const Maxim = mongoose.model('Maxim', maximSchema);

module.exports = {Maxim};
