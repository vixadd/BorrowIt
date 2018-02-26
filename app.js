/*
 * Initial standing of the application core.
 */

(function() {

    var BorrowItApp =
	ng.core.Component({
	    selector: 'BorrowIt',
	    template:'
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
'
	})

	.Class({
	    constructor: function() {}
	});

    
    document.addEventListener('DOMContentLoaded', function() {
	ng.platformBrowserDynamic.bootstrap(BorrowItApp);
    });

})();
