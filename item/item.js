var app = angular.module('BorrowIt');

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/item/:id', {
			templateUrl: '/item/item.html',
			controller: 'ItemController'
		 })
}])

app.controller('ItemController', ['$routeParams', function($routeParams) {
		var vm = this;
		
		vm.itemId = $routeParams.id;
		
		vm.item = {}
		
		vm.itemOwner = {}
		
		
		
		vm.getItem = function(itemId){
			vm.item = {
				name : "Bicycle",
				owner: "OWNER-UID-HERE",
				pics: [],
				maxBorrowTime: 60,
				description: "",
				condition: 6	
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
		
		vm.getItem(vm.itemId);
		vm.getItemOwner(vm.item);
		
		
	}]);