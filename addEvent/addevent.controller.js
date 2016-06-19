angular.module('eventApp')
.controller('addEventCtrl', ['authFactory', 'eventFactory', 'initialData', function(authFactory, initialData, eventFactory){

	var self = this;
	
	self.categories = initialData;
	
	console.log(self.categories);
	
	
	
	
}])
			
/*
angular.module('eventApp')
.controller('navigationController', ['FBMSG','$scope', 'authFactory', function(FBMSG, $scope, authFactory){
*/
			

			

/*
controller('eventManagerCtrl', ['eventFactory', 'initialData', function(eventFactory, initialData) {
*/
			