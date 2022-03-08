var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const { randomInt } = require('crypto');
const { read } = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'jsf1kji248adsa0jfaiop',
    resave: false,
    saveUninitialized: true
}))

var suma;

app.get('/', function(req, res) {
    var num1, num2;
    var conocido = req.session.nombre;
    var robot = (parseInt(req.session.suma) === suma);

    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);
    suma = num1 + num2;

    res.render('index', {
        title: 'Sesiones en Express.js',
        conocido: conocido,
        nombre: req.session.nombre,
        num1: num1,
        num2: num2,
        robot: robot
    });
});

app.post('/ingresar', function(req, res) {
    if (req.body.nombre) {
        req.session.nombre = req.body.nombre;
    }
    res.redirect('/');
});

app.post('/robot', function(req, res) {
    if (req.body.suma) {
        req.session.suma = req.body.suma;
    }
    res.redirect('/');
})

app.get('/salir', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

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
