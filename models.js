const mongoose = require('mongoose');

const koanSchema = mongoose.Schema({
  koanId: {type: String, required: true},
  koan: {type: String, required: true},
  challenge: {type: String, required: true},
  date: Date
});

const Koan = mongoose.model('Koan', koanSchema);

module.exports = {Koan};
