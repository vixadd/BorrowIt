angular.module('BorrowIt')
    .config(['$routeProvider', function($routeProvider) {
	$routeProvider
	    .when('/item-form', {
		templateUrl: './item-form/item-form.html',
		controller: 'ItemFormController',
		controllerAs: 'vm'
	    })
	    .when('/submitted-item-form', {
		template:'<div class="container"></div>',
		controller:'ItemFormController',
		controllerAs: 'vm'
	    })
        }
    ])

    .controller('ItemFormController', function() {
    var vm = this;
    });
