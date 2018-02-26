/*
 * Initial standing of the application core.
 * 
 * Author: David Kroell, Jonah Lazar
 */

// Dependencies for the main application
//= require header/header
//= require home/home
//= require footer/footer

(function() {

    var BorrowItApp =
	ng.core.Component({
	    selector:'BorrowIt',
	    template:'<app-header></app-header><router-outlet></router-outlet><app-footer></app-footer>',

	    
	})

	.Class({
	    constructor: [ ng.router.Router, function(router) {
		router.config([
		    // {path: '', name:'', component:'', useAsDefault: true}
		    {path:'/', name:'Index', component:'HomeComponent', useAsDefault:true}
		]);
	    }]
	});

    
    document.addEventListener('DOMContentLoaded', function() {
	ng.platformBrowserDynamic.bootstrap(BorrowItApp);
    });

})();
