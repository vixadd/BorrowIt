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
		
		
		
		vm.getItem = function(itemId){
			vm.item = {
				name : "Red Bicycle",
				owner: "OWNER-UID-HERE",
				pics: ["http://www.gaebler.com/images/startbiz/Used-Bicycle-Shop.jpg", "https://www.roysbike.com/images/schwinn_used_big.jpg", "https://pedalrevolutionblog.files.wordpress.com/2011/11/0091.jpg"],
				maxBorrowTime: 60,
				description: "Red, slightly used, but it will get you where you're going.",
				condition: 6,
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
		
		vm.getItem(vm.itemId);
		vm.getItemOwner(vm.item);
		
		
	}]);