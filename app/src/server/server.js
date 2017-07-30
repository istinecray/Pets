const passport = require('passport');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

require('./db.js');
require('./config/passport.js');

const auth = require('./controllers/auth');

const app = express();
const port = 8080;

const allowCORS = (request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCORS);
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api', router);

router.get('/', function(request, response){
  response.json({
    message: 'Welcome to the API!'
  });
});

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;

app.listen(port);

console.log('API started on port ' + port + '!');