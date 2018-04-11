angular.module('BorrowIt')
    .config(['$routeProvider', function($routeProvider) {
	$routeProvider
	    .when('/user/:id', {
		templateUrl: './user/user.html',
		controller: 'UserController',
		controllerAs: 'vm'
	    })
    }])

    .controller('UserController', [ '$routeParams', function($routeParams) {
    	var vm = this;
    	vm.username = $routeParams.id;
    	
    	vm.user = {};
    	vm.items = [];
    	vm.maxStars = 5;
    	
    	vm.getUser = function(){
    		vm.user = {
    			username: 'TestUser',
    			profilePic: 'http://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/alternates/FREE_660/02th-egg-person',
    			reputation: 3,
    			creationDate: 1523416004,
    			itemsLent: 16,
    			itemsBorrowed: 23
    		}
    	}
    	
    	vm.getItems = function(){
    		vm.items = [
    		    {
    				id: 'ITEM1',
    				title: 'HDMI Cable: 6 Feet long, and good Quality',
    				image: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg',
    				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		    },
    		    {
    				id: 'ITEM2',
    				title: 'HDMI to DVI-D Video Cable Adapter : F/M',
    				image: 'https://sgcdn.startech.com/005329/media/products/main/HDMIDVIFM.Main.jpg',
    				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		    },
    		    {
    		    	id: "ITEM3",
    		    	title: "Red Bicycle",
    		    	image: "http://www.gaebler.com/images/startbiz/Used-Bicycle-Shop.jpg",
    		    	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    		    }
    		];
    	}
    	
    	vm.range = function(number){
			return new Array(number);
		}
    	
    	vm.getUser();
    	vm.getItems();
    }]);
