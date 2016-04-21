angular.module('userApp',[
	'ngAnimate',
	'app.routes',
	'authService',
	'mainCtrl',
	'userCtrl',
	'userService'
])
//application configuration to integrate token into requests
.config(function($httpProvider){
	//attch our auth interceptor to the http requests
	$httpProvider.interceptor.push('AuthIntercaptor');
});
