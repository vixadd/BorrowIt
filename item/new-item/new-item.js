angular.module('BorrowIt')
    .config(['$routeProvider', function($routeProvider) {
	       $routeProvider
	       .when('/item/new/add', {
			   templateUrl: './item/new-item/new-item.html',
			   css: './item/new-item/new-item.css',
			   controller: 'NewItemController',
			   controllerAs: 'vm'
		       }
	       )}
    ])

    .controller('NewItemController', function() {
    	var vm = this;
    	
    	vm.newItem = {
    			name : "",
				owner: "OWNER-UID-HERE",
				pic: "http://placehold.it/300x300",
				description: ""
    	}
    	
    	vm.submitItem = function(){
    		// Submit the new item here.
    	}
	
	
    });
