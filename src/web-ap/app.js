var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');




var usersRouter = require('./routes/users');
var engines = require('consolidate');
var app = express();



app.use(session({
  secret: "cookie_secret",
  resave: true,
  saveUninitialized: true,
  maxAge: 3600000 
}));


app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/views'))


// view engine setup

//app.set('view engine', 'ejs');
//app.set('view engine', 'html');

//app.set('views', __dirname + '/views');
//app.engine('html', engines.mustache);

//new






app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




app.use('/', indexRouter);
app.use('/user', indexRouter);
app.use('/users', usersRouter);
app.use('/form', indexRouter);



app.use('/projeto', usersRouter);
const skillsChartRoute = require('./routes/index');

app.use('/skills-chart', skillsChartRoute);

const conections = require('./routes/index');

app.use('/conections', conections);

//add em 26 12
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



const profiles = require('./routes/index');

const getProjectData = require('./routes/index');


app.use('/profiles', profiles);

app.use('/getProjectData', getProjectData);

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



module.exports = app;
