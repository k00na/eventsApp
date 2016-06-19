angular.module('eventApp', ['firebase', 'ngRoute', 'ngMessages'])
.constant('FBMSG', 'https://eventappkuna.firebaseio.com/events')
.constant('FBCAT', 'https://eventappkuna.firebaseio.com/categories')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	
	$routeProvider.when('/', {
		templateUrl:'home.html',
		//  A resolve contains one or more promises that must resolve successfully before the route will change.
		resolve: { 											 
			"currentAuth": ["authFactory", function(authFactory) {
				var auth = authFactory.auth();
				console.log(auth);
				return auth.$requireAuth();
			}]
		}
	}),
		
	$routeProvider.when('/logout', {
		templateUrl:'/login/login.html',
		controller:'loginCtrl',
		controllerAs:'loginCtl',
		resolve: {
			"logout": ["authFactory", function(authFactory){
				authFactory.logout();
				
			}],
			"currentAuth": ["authFactory", function(authFactory) {
				var auth = authFactory.auth();
				console.log(auth);
				return auth.$requireAuth();
			}]
		}
	}),
		
	$routeProvider.when('/add-event', {
		
		templateUrl: '/addEvent/add-event.html',
		controller: 'addEventCtrl',
		controllerAs: 'addEventCtl',
		resolve: {
			
			"initialData": ["eventFactory", function(eventFactory) {
				var eventCats = eventFactory.getAllCats();
				console.log(eventCats);
				return eventCats;
			}],
			"currentAuth": ["authFactory", function(authFactory) {
				var auth = authFactory.auth();
				console.log(auth);
				return auth.$requireAuth();
			}]
		}
	}),
		
	$routeProvider.when('/login', {
		templateUrl:'/login/login.html',
		controller: 'loginCtrl',
		controllerAs: 'loginCtl'
	}),
		
	
		
    $routeProvider.otherwise({redirectTo:'/'});
       
    $locationProvider.html5Mode(true);
	
}])

//Run blocks - get executed after the injector is created and are used to kickstart the application. 
.run(['$rootScope', '$location', function($rootScope, $location) {
	
	$rootScope.$on('$routeChangeError', function(event, next, previous, error) {
		if(error = "AUTH_REQUIRED") {
			console.log("Error in auth");
			$location.path("/login");
		}
	})
}])
