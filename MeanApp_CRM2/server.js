var express = require("express");
var path = require('path');
var app = express();
var mongoose = require("mongoose");
var config = require('./config.js');

//connect to our database (hosted on modulus.io)
mongoose.connect(config.database);

//API ROUTES
var apiRouter = require('./app/routes/api')(app, express);
app.use('/api', apiRouter);

//MAIN CATCH ROUTE-------------------------
//SEND USER TO FRONTEND--------------------
//has to be registered after API ROUTES
app.get('*',function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
})

//START THE SERVER 
//=========================================
app.listen(config.port);
console.log('Magic happens on ports '+config.port);

