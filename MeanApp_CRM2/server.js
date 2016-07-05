var express = require("express");
var app = express();
var mongoose = require("mongoose");
var config = require('./config.js');

//connect to our database (hosted on modulus.io)
mongoose.connect(config.database);

//API ROUTES
var apiRouter = require('./app/routes/api')(app, express);
app.use('/api', apiRouter);

//START THE SERVER 
//=========================================
app.listen(config.port);
console.log('Magic happens on ports '+config.port);

