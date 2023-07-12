var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const port = process.env.PORT;
const mysql = require("mysql");
const mysqlConnection = require("./models/db");
const adminuser = require("./models/adminuser");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var server;
if (process.env.NODE_ENV == 'development') {
  var server = http.createServer(app);
  console.log(server,"server")
  server.listen(port, () => {
    console.log('HTTP Server running on port ' + port);
  });
}

module.exports = app;
