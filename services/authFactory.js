angular.module('eventApp')
.factory('authFactory', ['FBMSG', '$firebaseAuth', function(FBMSG, $firebaseAuth) {
	var authFactory = {};
	var ref = new Firebase(FBMSG);
	var auth = $firebaseAuth(ref);
	console.log(auth);
	
	authFactory.createUser = function(email, password){
		return auth.$createUser({
			email: email,
			password: password
		});
	}
	
	authFactory.logout = function(){
		auth.$unauth();
	}
	
	authFactory.authUser = function(email, password) {
     	return auth.$authWithPassword({
					  email: email,
					  password: password
				});
     }
	
	authFactory.auth = function() {
        return auth;
     }
	
	
	return authFactory;
}])