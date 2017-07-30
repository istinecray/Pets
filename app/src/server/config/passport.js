const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({
  usernameField: 'username'
}, (username, password, done) => {
  User.findOne({ username: username }, (error, user) => {
    if (error) {
      return done(error);
    }

    if (!user){
      return done(null, false, {
        message: 'User not found!'
      });
    }

    if (!user.validPassword(password)) {
      return done(null, false, {
        message: 'Wrong password!'
      });
    }

    return done(null, user);
  })
}));