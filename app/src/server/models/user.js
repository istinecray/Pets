const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

let user = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email:  {
    type: String,
    unique: true,
    required: true
  },
  hash: String,
  salt: String 
});

user.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
};

user.methods.validPassword = function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
  return this.hash === hash;
};

user.methods.generateJWT = function() {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    username: this.username,
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000)
  }, '$mol1010'); //FIX THIS LATER! store as env var on server
};

mongoose.model('User', user);