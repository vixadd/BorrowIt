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

    var BorrowItApp
	.annotations =
	[new ng.core.Component({
	    selector:'app-root',
	    template:'hello<app-header></app-header><router-outlet></router-outlet><app-footer></app-footer>',

	    
	})];

    BorrowItApp.parameters = [

	[ new ng.router.Router, function(router) {
		router.config([
		    // {path: '', name:'', component:'', useAsDefault: true}
		    {path:'/', name:'Index', component:'HomeComponent', useAsDefault:true}
		]);
	    }]
	]

    
    document.addEventListener('DOMContentLoaded', function() {
	ng.platformBrowserDynamic.bootstrap(BorrowItApp);
    });

})();
