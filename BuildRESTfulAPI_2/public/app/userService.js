angular.module('stuffService',[])
	.factory('Stuff', function($http){
		
		//Create the object
		var myFactory = {};
		
		//a function to get all the stuffService
		myFactory.all = function(){
			return $http.get('/api/stuff');
		};
		
		return myFactory;
	});
angular.module('userService',[])
	.factory('User', function($http){
		
		//Create a new object
		var userFactory = {};
		
		//get a single user
		userFactory.get = function(id){
			return $http.get('/api/users/'+id);
		};
		
		//get all users
		userFactory.all = function(){
			return $http.get('/api/users/');
		};
		
		//create a user
		userFactory.create = function(userData){
			return $http.post('/api/users/',userData);
		};
		
		//update a user
		userFactory.update = function(id, userData){
			return $http.put('/api/users/'+id, userData);
		};
		
		//delete a user
		userFactory.delete = function(id){
			return $http.delete('/api/users/'+id);
		};
		
		//return out entire userFactory object
		return userFactory;
	});
angular.module('authService',[])
	//=================================================
	//auth factory to login and get information
	//inject $http for communicating with the API
	//inject $q to return promise objects
	//inject AuthToken to manage tokens
	//=================================================
	.factory('Auth', function($http, $q, AuthToken){
		//create auth factory object
		var authFactory = {};
		
		//log a user in
		authFactory.login = function(username, password){
			//return the promise object and its data
			return $http.post('/api/authenticate/', {
				username: username,
				password: password
			}).success(function(data)
		}
		//handle login
		
		//handle logout
		
		//check if a user is logged in
		
		//get the user info
		
		//return auth factory object
		
		return authFactory;
	})
	//=================================================
	//factory for handling tokens
	//inject $window to store token client-side
	//=================================================
	.factory('AuthToken', function($window){
		var authTokenFactory = {};
		
		//get the token
		authTokenFactory.getToken = function(){
			return $window.localStorage.getItem('token');
		};
		
		//function to set token or clear token
		//if a token is passedd, set the token
		//if there is no token, clear it from local storage
		authTokenFactory.setToken = function(token){
			if(token)
				$window.localStorage.setItem('token', token);
			else
				$window.localStorage.removeItem('token');
		};
		
		return authTokenFactory;
	})
	//=================================================
	//application configuration to integrate token into requests
	//=================================================
	.factory('AuthInterceptor', function($q, AuthToken){
		
		var interceptorFactory = {};
		
		//attach the token to every requests
		
		//redirect it a token doesn't authenticate
		
		return interceptorFactory;
	})
	