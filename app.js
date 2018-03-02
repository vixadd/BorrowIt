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
    .config(function($routeProvider, $locationProvider) {

	$routeProvider
	
	// For user management, as well as views.
	    .when('/user/:id', {
		templateUrl: 'user/user.html',
		styleUrl:    'user/user.css',
		controller:  'UserController',
		resolve: {
		    // get user information by a call through some server api here.
		}
	    })

	// If we are in the home directory
	    .when('/', {
		templateUrl: 'home/home.html',
		styleUrl: 'home/home.css',
		controller: 'HomeController',
	    })

	    .otherwise({ redirectTo: '/'});
	
    })


    .controller("AppController", function($rootScope) {
	// Main application controller here.
    });

