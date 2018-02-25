/*
 * Initial standing of the application core.
 */

(function() {

    var BorrowItApp =
	ng.core.Component({
	    selector: 'BorrowIt',
	    template: '<h1>Welcome to BorrowIt!</h1>'
	})

	.Class({
	    constructor: function() {}
	});

    
    document.addEventListener('DOMContentLoaded', function() {
	ng.platformBrowserDynamic.bootstrap(BorrowItApp);
    });

})();
