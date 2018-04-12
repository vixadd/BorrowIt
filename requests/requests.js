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

    .controller('RequestsController', ['$routeParams', '$location', function($routeParams, $location) {
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
    		
    		vm.lendRequests = [
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
    		
    		vm.currentlyBorrowedItems = [
    			{
    				item: {
	    				id: 'ITEM1',
	    				title: 'HDMI Cable: 6 Feet long, and good Quality',
	    				image: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg',
	    				available: false,
	    				currentBorrower: 'BorrowerUser1',
	    				borrowStartTime: 1523430841
    	    		},
    	    		itemLent: true,
    	    		itemReturned: false,
    	    		requestApproved: true,
    	    		owner: "JonahLazar",
    	    		requester: "BorrowerUser1",
    	    		ownerEmail: "jonah.lazar.14@cnu.edu",
    	    		requesterEmail: "joshkipper@gmail.com"
    			},
    			{
    				item: {
	    				id: 'ITEM1',
	    				title: 'HDMI Cable: 6 Feet long, and good Quality',
	    				image: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg',
	    				available: false,
	    				currentBorrower: 'BorrowerUser1',
	    				borrowStartTime: 1523430841
    	    		},
    	    		itemLent: true,
    	    		itemReturned: false,
    	    		requestApproved: true,
    	    		owner: "JonahLazar",
    	    		requester: "BorrowerUser1",
    	    		ownerEmail: "jonah.lazar.14@cnu.edu",
    	    		requesterEmail: "joshkipper@gmail.com"
    			}
    		];
    		
    		vm.currentlyLentItems = [
    			{
    				item: {
	    				id: 'ITEM1',
	    				title: 'HDMI Cable: 6 Feet long, and good Quality',
	    				image: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg',
	    				available: false,
	    				currentBorrower: 'BorrowerUser1',
	    				borrowStartTime: 1523430841
    	    		},
    	    		itemLent: true,
    	    		itemReturned: false,
    	    		requestApproved: false,
    	    		owner: "JonahLazar",
    	    		requester: "BorrowerUser1",
    	    		ownerEmail: "jonah.lazar.14@cnu.edu",
    	    		requesterEmail: "joshkipper@gmail.com"
    			},
    			{
    				item: {
	    				id: 'ITEM1',
	    				title: 'HDMI Cable: 6 Feet long, and good Quality',
	    				image: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg',
	    				available: false,
	    				currentBorrower: 'BorrowerUser1',
	    				borrowStartTime: 1523430841
    	    		},
    	    		itemLent: true,
    	    		itemReturned: false,
    	    		requestApproved: true,
    	    		owner: "JonahLazar",
    	    		requester: "BorrowerUser1",
    	    		ownerEmail: "jonah.lazar.14@cnu.edu",
    	    		requesterEmail: "joshkipper@gmail.com"
    			}
    		];
    	}
    	
    	// Link to a user page.
    	vm.goToUserPage = function(username, event){
    		event.stopPropagation();
    		$location.path('/user/' + username);
    	}
    	
    	vm.goToItemPage = function(item){
    		$location.path('/item/' + item.id);
    	}
    	
    	// Mark that you have received an item to borrow
    	vm.markReceived = function(request, event){
    		event.stopPropagation();
    	}
    	
    	// Mark that the borrower has returned the item to you.
    	vm.markReturned = function(request, event){
    		event.stopPropagation();
    	}
    	
    	// Approve a request to borrow your item.
    	vm.approve = function(request, event){
    		event.stopPropagation();
    		// Approve the request.
    	}
    	
    	vm.getDeltaTime = function(startTime){
    		return Date.now() - (startTime*1000);
    	}
    	
    	vm.getRequests();
    	console.log(Date.now())
}])
.filter('millSecondsToTimeString', function() {
  return function(millseconds) {
    var oneSecond = 1000;
    var oneMinute = oneSecond * 60;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;

    var seconds = Math.floor((millseconds % oneMinute) / oneSecond);
    var minutes = Math.floor((millseconds % oneHour) / oneMinute);
    var hours = Math.floor((millseconds % oneDay) / oneHour);
    var days = Math.floor(millseconds / oneDay);

    var timeString = '';
    if (days !== 0) {
        timeString += (days !== 1) ? (days + ' d ') : (days + ' d ');
    }
    if (hours !== 0) {
        timeString += (hours !== 1) ? (hours + ' h ') : (hours + ' h ');
    }
    if (minutes !== 0) {
        timeString += (minutes !== 1) ? (minutes + ' m ') : (minutes + ' m ');
    }
    /*if (seconds !== 0 || millseconds < 1000) {
        timeString += (seconds !== 1) ? (seconds + ' seconds ') : (seconds + ' second ');
    }*/

    return timeString;
};
});
