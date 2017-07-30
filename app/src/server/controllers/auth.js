const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const sendResponse = (response, status, content) => {
  response.status(status);
  response.json(content);
};

const register = (request, response) => { 
  let user = new User({
    username: request.body.username,
    email: request.body.email
  });

  user.setPassword(request.body.password);

  user.save((error) => {
    const token = user.generateJWT();
    sendResponse(response, 200, {
      token
    });
  })
};

const login = (request, response) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      sendResponse(response, 404, error);
      return;
    }

    if (user) {
      const token = user.generateJWT();
      sendResponse(response, 200, {
        user: (({ username, email }) => ({ username, email }))(user),
        token
      });
    } else{
      sendResponse(response, 401, info);
    }
  })(request, response);
};

module.exports.register = register;
module.exports.login = login;