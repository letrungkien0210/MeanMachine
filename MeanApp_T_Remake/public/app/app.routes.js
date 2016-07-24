angular.module('app.routes',['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    //home page route
    .when('/',{
        templateUrl: 'app/views/pages/home.html'
    });

    //get grid of the hash in the URL
    //$locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);