//BASE SETUP
//=======================================

//CALL THE PACKAGES ---------------------
var express		= require('express');//call express
var app			= express();//define our app using express
var bodyParser	= require('body-parser');//get body-parser
var morgan		= require('morgan');//used to see requests
var mongoose	= require('mongoose');//for working w/ our database
var port		= process.env.PORT || 8080;//set the port for out app
console.log('Server s port is '+ port);

//APP CONFIGURATION ---------------------
//use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configuration  our app to handle CORS requests
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});

//log all requests to the console
app.use(morgan('dev'));

//ROUTES FOR OUR API
//---------------------------------------
var apiRouter = express.Router();//get an instance of the express Router

//middleware to use for all requests
apiRouter.use(function(req, res, next){
	//do logging
	console.log('Somebody just came to our app!!!');
	
	//We'll add more to the middleware in Chapter 10
	//This is where we will authenticate users
	
	next();//make sure we go to the next routes and don't stop here
});

//test route to make sure everthing is working
//accessed at GET http://localhost:8080/api
apiRouter.get('/', function(req, res){
	res.json({message: 'hooray! welcome to our api!'});
});

//more routes for our API will happen here
//on routes that end in/users
//-------------------------------------------------
apiRouter.route('/users')
	//create a user (accessed at POST http://localhost:8080/api/users)
	.post(function(req, res){
		//Create a new instance of the User model
		var user = new User();
		
		//set the users information (comes from the request)
		user.name = req.body.name;
		user.username = req.body.username;
		user.password = req.body.password;
		
		//save the user and check for errors
		user.save(function(err){
			if(err){
				//duplicate entry
				if(err.code == 11000){
					return res.json({success: false, messsage: 'A user with that username already exists. '});
				}else
					return res.send(err);
			}
			res.json({message: 'User created!'});
		});
	})
	//get all the users (accessed at GET http://localhost:8080/api/users)
	.get(function(req, res){
		User.find(function(err, users){
			if(err) res.send(err);
			
			//return users
			res.json(users);
		});	
	});
// on routes that end in /users/:user_id
//-----------------------------------------------
apiRouter.route('/users/:user_id')
	//get the user with id
	//(accessed at GET http://localhost:8080/api/users/:user_id)
	.get(function(req, res){
		User.findById(req.params.user_id, function(err, user){
			if(err) res.send(err);
			
			//return that user
			res.json(user);
		});
	});
	

//basic route for the home page
app.get('/', function(req, res){
	res.send('Welcome to the home page!');
});

//REGISTER OUR ROUTES --------------------
//all of our routes will be prefixed with api
app.use('/api', apiRouter);

//START THE SERVER
//========================================
app.listen(port);
console.log('Magic happens on port '+ port);

//connect to our database (hosted by mongolab)
mongoose.connect('mongodb://letrungkien0210:kecodonforever0210@ds049181.mlab.com:49181/meanmachine');

var user = require('./app/models/user');
