angular.module('BorrowIt')
    .config(['$routeProvider', function($routeProvider) {
	       $routeProvider.when('/requests', {
		   templateUrl: './requests/requests.html',
		   css: './requests/requests.css',
		   controller: 'RequestsController',
		   controllerAs: 'vm'
	       }
	)}
    ])

    .controller('RequestsController', ['$routeParams', function($routeParams) {
    	var vm = this;
    	
    	vm.borrowRequests;
    	vm.lendRequests;
    	vm.currentlyBorrowedItems;
    	vm.currentlyLentItems;
    	
    	vm.myUsername = "BorrowerUser1";
    	
    	vm.getRequests = function() {
    		vm.borrowRequests = [
    			{
    				item: {
	    				id: 'ITEM1',
	    				title: 'HDMI Cable: 6 Feet long, and good Quality',
	    				image: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg',
	    				available: false
    	    		},
    	    		itemLent: false,
    	    		itemReturned: false,
    	    		requestApproved: false,
    	    		owner: "JonahLazar",
    	    		requester: "BorrowerUser1"
    			},
    			{
    				item: {
	    				id: 'ITEM1',
	    				title: 'HDMI Cable: 6 Feet long, and good Quality',
	    				image: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg',
	    				available: true
    	    		},
    	    		itemLent: false,
    	    		itemReturned: false,
    	    		requestApproved: true,
    	    		owner: "JonahLazar",
    	    		requester: "BorrowerUser1",
    	    		ownerEmail: "jonah.lazar.14@cnu.edu",
    	    		requesterEmail: "joshkipper@gmail.com"
    			}
    		];
    	}
    	
    	vm.approve = function(request){
    		// Approve the request.
    	}
    	
    	vm.getRequests();
}]);
