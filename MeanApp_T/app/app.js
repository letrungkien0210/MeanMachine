angular.module('userApp',[
    'ngAnimate',
    'app.routes',
    'authService',
    'mainCtrl',
    'userCtrl',
    'userService'
])
//application configuration to integrate token into request
.config(['$httpProvider',function($httpProvider){
    console.log('cc');
    //attach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor');
}])