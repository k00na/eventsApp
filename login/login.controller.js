angular.module('eventApp')
.controller('loginCtrl', ['FBMSG', 'authFactory', "$window", function(FBMSG, authFactory, $window) {
	
	var self = this;
	self.signUp = function(){
		var result = authFactory.createUser(self.email, self.password);
		result.then(function(userData){
			console.log("User successfully created with uid: ", userData.uid);
			
		}, function(error){
			console.log("An error occured. ", error);
		})
	}
	
	self.login = function() {
		var result = authFactory.authUser(self.loginEmail, self.loginPassword);
		result.then(function(authData){
			console.log("User successfully logged in with uid: ", authData.uid);
			$window.location.href = "/";
		}, function(error){
			console.log("Authentication failed: ", error);
		})
	}
	
	// Added this for accessing current auth inside navigation bar
	self.isLoggedIn = function(){
		var loggedIn = authFactory.auth();
		return loggedIn.$requireAuth();
	}
	
}])


/*
angular.module('eventApp').controller('loginCtrl', ['FBMSG', 'authFactory', "$window", function(FBMSG, authFactory, $window) {
    var self = this;
    self.signUp = function() {
      var result = authFactory.createUser(self.email, self.password);
      result.then(function(userData){
      	 console.log("User Successfully created with uid: ", userData.uid)
      }, function(error) {
      	console.log("an error occurred ", error)
      })
    }

    self.login = function () {

    	var result = authFactory.authUser(self.loginEmail, self.loginPassword);
      result.then(function(authData){
      	 console.log("User Successfully logged in with uid: ", authData.uid)
         $window.location.href = "/";
      }, function(error) {
      	console.log("Authentication Failed: ", error)
      })
    }

}])

*/