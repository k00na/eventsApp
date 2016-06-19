// .controller('loginCtrl', ['FBMSG', 'authFactory', "$window", function(FBMSG, authFactory, $window)
angular.module('eventApp')
.controller('navigationController', ['FBMSG','$scope', 'authFactory', function(FBMSG, $scope, authFactory){
	
	$scope.auth = authFactory.auth();
	
	$scope.auth.$onAuth(function(authData){
		$scope.authData = authData;
	});
	
}]);

/*
LESSONS LEARNED WHILE FUCKING AROUND WITH NAVIGATION FLOW

1) it aint that hard to access services outside of ng-view
2) I suck at writing syntax for controllers
3) Always add the FBMSG constant? 
*/


/*

// JS NOT NULL CHECK

if (!!val) {
    alert("this is not null")
} else {
    alert("this is null")
}

/// FROM FIREBASE DOCS

var app = angular.module("sampleApp", ["firebase"]);

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://docs-sandbox.firebaseio.com", "example3");
    return $firebaseAuth(ref);
  }
]);

app.controller("SampleCtrl", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });
  }
]);

///	CURRENT AUTH
var auth = authFactory.auth();
				console.log(auth);
				return auth.$requireAuth();
/// FROM STACKOVERFLOW

The DOM elements outside of your ng-view must have controllers of their own, with templatingFactory injected as a dependency.

First I would modify the html like so:

<div class="header" ng-controller="headerController" ng-style="{ 'background-color' : themeStore.bg }">
Then add headerController to your module:

angular.module('demoApp').controller('headerController', function($scope, templatingFactory){
  $scope.themeStore = templatingFactory.getTheme();

  $scope.$watch(templatingFactory.getTheme, function (newTheme) { 
      $scope.themeStore = newTheme;
  });

});
*/