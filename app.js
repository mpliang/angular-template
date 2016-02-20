'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/template';

mongoose.connect(mongoUrl, function(err){
  if(err) return console.error(`Error connecting to Mongodb: ${err}`);
  console.log(`Connected to MongoDB: ${mongoUrl}`);
});

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.use(function(req, res){
  res.status(404).render('404');
});

var server = http.createServer(app);

server.listen(PORT);
server.on('error', function(err) {
  console.error(err);
});
server.on('listening', function(){
  console.log(`Listening on port ${PORT}`);
});
