angular.module('mainCtrl',[])
.controller('mainController', ['$rootScope' , '$scope' , '$location' , 'Auth' , function($rootScope, $scope, $location, Auth){

    var vm = this;

    //get info if a person is logged in.
    vm.loggedIn = Auth.isLoggedIn();

    //check to see if a user is logged in on every request
    $rootScope.$on('$routeChangeStart', function(){
        vm.loggedIn = Auth.isLoggedIn();

        //get user information on route change
        // Auth.getUser().success(function(data){
        //     vm.user = data;
        // });
        Auth.getUser().then(function success(data) {
            console.log(data);
            vm.user = data.data._doc;
        }, function error(data){
            vm.user = data;
        });
    });

    //function to handle login form
    vm.doLogin = function(){
        vm.processing = true;

        //clear the error
        vm.error = '';

        //call the Auth.login() function
        Auth.login(vm.loginData.username, vm.loginData.password)
        .then(function success(data){
            vm.processing = false;
             $location.path('/users');
        }, function error(data){
            vm.processing = false;
            vm.error = data.message;
        });
    };

    //function to handle logging out
    vm.doLogout = function(){
        Auth.logout();

        //reset all user info
        vm.user = {};
        $location.path('/login');
    };
}]);