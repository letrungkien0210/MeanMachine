var express = require("express");
var app = express();
var mongoose = require("mongoose");
var config = require('./config.js');

//connect to our database (hosted on modulus.io)
mongoose.connect(config.database);

//START THE SERVER 
//=========================================
app.listen(config.port);
console.log('Magic happens on ports '+config.port);

