/*
 * Angular root application for the Capstone Project
 * Will be the root for BorrowIt.
 *
 *      Author: David Kroell
 *     Version: 0.0.1
 */

// Instantiate the module to use.
angular.module("BorrowIt", ['ngRoute'])

    // Configure the application with the routing system.
    .config(['$routeProvider', '$locationProvider',
	     function($routeProvider, $locationProvider) {

	$routeProvider
	// Signin Page
	    .when('/signin', {
		templateUrl:'./signin/signin.html',
		controller: 'SiginIn',
		css: './signin/signin.css'
	    })
	// Signup page
	    .when('./signup', {
		templateUrl: './signup/signup.html',
		controller: 'SignUp',
		css: './signup/signup.css'
	    })

	    .when('./item/:id', {
		templateUrl: './item/item.html',
		css: './item/item.css',
		controller: 'ItemController',
		resolve: {
		    // Pull relevant information.
		}
	    })

	    .when('./search/:param', {
		templateUrl: './search/search.html',
		css: './search/search.css',
		controller: 'Search',
		resolve: {
		    // Pull relevant information from the source.
		}
	    })
	
	// For user management, as well as views.
	    .when('/user/:id', {
		templateUrl: './user/user.html',
		css:    './user/user.css',
		controller:  'UserController',
		resolve: {
		    // get user information by a call through some server api here.
		}
	    })

	// If we are in the home directory
	    .when('/', {
		templateUrl: './home/home.html',
		css: './home/home.css',
		controller: 'HomeController',
	    })

	    .otherwise({ redirectTo: '/'});

    }])


    .controller("AppController", function($rootScope) {
	$scope.text = "Welcome";
    });
