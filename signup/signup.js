angular.module('BorrowIt')
    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/signup', {
	    templateUrl: './signup/signup.html',
	    controller: 'SignupController',
	    controllerAs: 'vm'
	})

	.when('./signup-error', {
		template:''
	})
	.when('./signup-success', {
		template:''
	})

    }]).controller('SignupController', ['$log', function($log) {
	var vm = this;
	
	vm.onSignupClick = function() {

	    // Grab input items for the Signup.
	    vm.name = document.getElementById("inputName").value;
	    vm.dob  = document.getElementById("dob").value;
	    vm.email= document.getElementById("inputEmail").value;
	    vm.email-conf = document.getElementById("confEmail").value;
	    vm.password = document.getElementById("inputPassword").value;
	    vm.password-conf = document.getElementById("confPassword").value;

	    //Log: Debugging purposes.
	    $log.log(vm.name);
	    $log.log(vm.email);
	    $log.log(dob);
	    $log.log(vm.password)
	}
    }]);
