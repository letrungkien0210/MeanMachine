//injec the stuff service into our main Angular module
angular.module('myApp',['stuffService'])
//create a controller and inject the Stuff factory
	.controller('userController', function(Stuff){
		var vm = this;
		
		//get all the stuff
		Stuff.all()
			//promise object
			.success(function(data){
				//bind the data to a controller variable
				//this come from the stuffService
				vm.stuff = data;
			});
	})