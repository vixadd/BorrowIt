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
		url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
		title: '50 Must-have plugins for extending Twitter Bootstrap',
		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg'
	    },
	    {
		url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
		title: 'Making a Super Simple Registration System With PHP and MySQL',
		image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg'
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
