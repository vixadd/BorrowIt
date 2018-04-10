angular.module('BorrowIt')
    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/signin', {
	    templateUrl: './signin/signin.html',
	    controller: 'SigninController',
	    controllerAs: 'vm'
	})
    }]).controller('SigninController', ['$scope', '$location', function($scope, $location) {
		var vm = this;
		
		vm.username;
		vm.password;
		
		vm.submitEnabled = true;
		
		vm.showSignInError = false;
		vm.errorText = "";
	
		vm.submit = function() {
			if(vm.submitEnabled) {
				vm.submitEnabled = false;
				var authenticationData = {
			        Username : vm.username,
			        Password : vm.password,
			    };
			    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
			    var poolData = { 
			    	UserPoolId : 'us-east-1_2tWi4ARGA', // Your user pool id here
				    ClientId : '1a9tue69nuhci0j7e4t0i83foc' // Your client id here
			    };
			    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
			    var userData = {
			        Username : vm.username,
			        Pool : userPool
			    };
			    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
			    cognitoUser.authenticateUser(authenticationDetails, {
			    	
			        onSuccess: function (result) {
			            console.log('access token + ' + result.getAccessToken().getJwtToken());
			            /*Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
			            console.log('idToken + ' + result.idToken.jwtToken);
			        },
	
			        onFailure: function(err) {
			        	$scope.$apply(function() {
			        		vm.errorText = err.message;
				            vm.showSignInError = true;
				            vm.submitEnabled = true;
			        	});
			        },
	
			    });
			}
		}

    }]);
