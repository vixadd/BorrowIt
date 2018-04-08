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

	    //Log: Debugging purposes.
	    $log.log(vm.name);
	    $log.log(vm.email);
	    $log.log(vm.dob);
	    $log.log(vm.inputPassword);
	}
    }]);
