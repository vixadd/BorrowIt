var app = angular.module('BorrowIt');

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/item/:id', {
			templateUrl: '/item/item.html',
			css: '/item/item.css',
			controller: 'ItemController',
			controllerAs: 'vm'
		 })
}])

app.controller('ItemController', ['$routeParams', '$scope', 'RestServices', function($routeParams, $scope, rest) {
		var vm = this;
		
		vm.itemId = $routeParams.id;
		
		vm.item = {
			image : 'http://placehold.it/400'
		}
		
		vm.maxStars = 5;
		
		vm.getItem = function(){
			rest.getItem(vm.itemId)
			.then(function(response){
				$scope.$apply(function(){
					vm.item = response.data;
				});
			}).catch(function(result){
				console.log(result);
			})
		}
		
		vm.range = function(number){
			return new Array(number);
		}
		
		vm.getItem();
		
		
	}]);