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
		$log.log(vm.name);
	}
    }]);
