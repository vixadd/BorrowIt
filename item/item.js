var app = angular.module('BorrowIt');

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/item/:id', {
			templateUrl: '/item/item.html',
			controller: 'ItemController',
			controllerAs: 'vm'
		 })
}])

app.controller('ItemController', ['$routeParams', function($routeParams) {
		var vm = this;
		
		vm.itemId = $routeParams.id;
		
		vm.item = {}
		
		vm.itemOwner = {}
		
		vm.maxStars = 5;
		
		vm.getItem = function(itemId){
			vm.item = {
				name : "Red Bicycle",
				owner: "OWNER-UID-HERE",
				pic: "http://www.gaebler.com/images/startbiz/Used-Bicycle-Shop.jpg",
				maxBorrowTime: 60,
				description: "Red, slightly used, but it will get you where you're going.",
				comments: ["Great bike. Would ride again.", "A little shaky, but it didn't fall apart on me."],
				condition: 3,
				available : true
			}
		}
		
		vm.getItemOwner = function(item){
			vm.itemOwner = {
				firstName: "John",
				reputation: 245,
				userId: "OWNER-UID-HERE",
				profilePic: "url-to-profile-pic"
			}
		}
		
		vm.range = function(number){
			return new Array(number);
		}
		
		vm.getItem(vm.itemId);
		vm.getItemOwner(vm.item);
		
		
	}]);