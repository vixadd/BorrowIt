/*
 * Initial standing of the application core.
 */

(function() {

    var BorrowItApp =
	ng.core.Component({
	    selector: 'BorrowIt',
	    template:'<img src="./assets/img/BorrowIt.png">'
	})

	.Class({
	    constructor: function() {}
	});

    
    document.addEventListener('DOMContentLoaded', function() {
	ng.platformBrowserDynamic.bootstrap(BorrowItApp);
    });

})();
