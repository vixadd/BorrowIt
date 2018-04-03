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
				description: "Red, slightly used, but it will get you where you're going. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				comments: [
					{
						text: "Great bike. Would ride again. Any questions?",
						userName: "DavidSPumpkins",
						userId: "ANOTHER-UID"
					},
					{
						text:  "A little shaky, but it didn't fall apart on me.",
						userName: "MichaelJFox",
						userId: "YET-ANOTHER-UID"
					}
				],
				condition: 3,
				available : true
			}
		}
		
		vm.getItemOwner = function(item){
			vm.itemOwner = {
				userName: "HarlEDavidson",
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