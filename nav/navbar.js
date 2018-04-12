angular.module('BorrowIt')
.component('navbar', {
	templateUrl: './nav/navbar.html',
	controller: 'NavController',
	controllerAs: 'vm',
	bindings: {
		signedIn: '<',
		username: '<',
		newRequests: '<',
		newReviews: '<'
	}
})
.controller('NavController', [function(){
	var vm = this;
}]);