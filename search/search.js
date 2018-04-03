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

    .controller('SearchController', function() {
	var vm = this;
	
	vm.items = [
	    {
		url: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg',
		title: 'HDMI Cable: 6 Feet long, and good Quality',
		image: 'https://static.computercablestore.net/content/images/thumbs/0012304_10-meter-328-ft-high-speed-hdmi-cable-with-ethernet.jpeg'
	    },
	    {
		url: 'https://sgcdn.startech.com/005329/media/products/main/HDMIDVIFM.Main.jpg',
		title: 'HDMI to DVI-D Video Cable Adapter : F/M',
		image: 'https://sgcdn.startech.com/005329/media/products/main/HDMIDVIFM.Main.jpg'
	    }];
    }).filter('searchFor', function(){

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
