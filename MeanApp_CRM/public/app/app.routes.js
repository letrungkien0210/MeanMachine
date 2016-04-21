angular.module('app.routes',['ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider
		//homepage route
		.when('/',{
			templateUrl : 'app/views/pages/home.html'
		})
		//login page
		.when('/login',{
			templateUrl: 'app/views/pages/login.html',
			controller: 'mainController',
			controllerAs: 'login'
		})
		.when('/users',{
			templateUrl: 'app/views/pages/all.html',
			controller: 'userController',
			controllerAs: 'user'
		})
		.when('/users/create',{
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})
		.when('/users/:user_id',{
			templateUrl: 'app/views/pages/user/single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		});
		
		//get rid of the hash in the URL
		$locationProvider.html5Mode(true);
	});