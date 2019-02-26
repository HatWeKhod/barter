var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var mongoose = require('mongoose'),
  path = require('path'),
  stylus = require('stylus'),
  env = process.env['NODE_ENV'] || 'development',
  keys;
var passport = require('passport');
var flash = require('connect-flash');
var FacebookStrategy = require('passport-facebook').Strategy;
var FbUsers = require('./models/facebook').FbUsers;
const MongoStore = require('connect-mongo')(session);
var compile = function (str, path) {
  return stylus(str).set('filename', path);
};
keys = (env === 'production') ? require('./config/productionKeys')[env] : require('./config/keys')[env];
mongoose.Promise = require('bluebird');
mongoose.connect(keys.DB, {
    promiseLibrary: require('bluebird')
  })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));
app.use(logger('dev'));

app.use(stylus.middleware({
  src: __dirname + '/dist',
  compile: compile
}));
/* https redirect start */
/* https redirect end */
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '52428800'
})); // get information from html forms

app.use(bodyParser.json({
  limit: '52428800'
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({
  store: new MongoStore({
    url: keys.DB
  }),
  secret: 'keyboard cat',
  cookie: {
    maxAge: 1000 * 86400
  }
}))

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/auth/callback/facebook', router);

require('./config/passport')(passport, FacebookStrategy, FbUsers);
require('./config/routes')(app, passport);

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept,X-File-Type,X-File-Name,X-File-Size');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('X-Forwarded-Proto', 'https');
  // Pass to next layer of middleware
  next();
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
