angular.module('BorrowIt')
    .config(['$routeProvider', function($routeProvider) {
	       $routeProvider.when('/search', {
		   templateUrl: './search/search.html',
		   css: './search/search.css',
		   controller: 'SearchController',
		   controllerAs: 'vm'
	       }
	)}
    ])

    .controller('SearchController', ['$routeParams', function($routeParams) {
	var vm = this;
	
	vm.searchString = "";
	
	if($routeParams.q){
		console.log($routeParams);
		vm.searchString = $routeParams.q;
	}
	
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
    }]).filter('searchFor', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function(arr, searchString){

	if(!searchString){
	    return arr;
	}

	var result = [];

	searchString = searchString.toLowerCase();

	// Using the forEach helper method to loop through the array
	angular.forEach(arr, function(item){

	    if(item.title.toLowerCase().indexOf(searchString) !== -1){
		result.push(item);
	    }

	});

	return result;
    };
});
