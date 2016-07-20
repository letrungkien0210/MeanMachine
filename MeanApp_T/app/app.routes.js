angular.module('app.routes', ['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){

    $routeProvider
    .when('/',{
        templateUrl: 'app/views/pages/home.html'
    })
    .when('/login',{
        templateUrl: 'app/views/pages/login.html',
        controller: 'MainController',
        controllerAs: 'login'
    })
    .when('/users', {
        templateUrl: 'app/views/pages/users/all.html',
        controller: 'UserController',
        controllerAs: 'user'
    })
    //form to create a new user
    //same view as edit page
    .when('/users/create', {
        templateUrl: 'app/views/pages/users/single.html',
        controller: 'UserCreateController',
        controllerAs: 'user'
    })
    //page to edit a user
    .when('/users/:user_id', {
        templateUrl: 'app/views/pages/users/single.html',
        controller: 'UserEditController',
        controllerAs: 'user'
    });

    //get rid of the hash in the URL
    $locationProvider.html5Mode(true);
}])