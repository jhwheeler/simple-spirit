const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {type: String, default: ""},
  password: {
    type: String,
    required: true
  },
  role: {type: String, default: "user"}
});

UserSchema.methods.apiRep = function() {
  return {
    username: this.username || '',
    email: this.email || '',
    role: this.role || ''
  };
}

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}

UserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};
