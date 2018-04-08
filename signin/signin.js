angular.module('BorrowIt')
    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/signin', {
	    templateUrl: './signin/signin.html',
	    controller: 'SigninController',
	    controllerAs: 'vm'
	})
    }]).controller('SigninController', ['$log', function($log) {
	var vm = this;

	vm.onSigninClick = function() {

	    // Debug values
	    $log.log(vm.inputEmail);
	    $log.log(vm.inputPassword);
	    $log.log(vm.remember_me);
	}

    }]);
