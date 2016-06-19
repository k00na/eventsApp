angular.module('eventApp')
.factory('eventFactory', ['FBMSG', '$firebaseArray', function(FBMSG, $firebaseArray) {
	
	var eventFactory = {};
	var ref = new Firebase(FBMSG);
	var events = $firebaseArray(ref);
	
	eventFactory.getAllEvents = function(){
		console.log(events);
		return events;
	}
	
	eventFactory.createEvent = function(event){
		return events.$add(event);
	}
	
	eventFactory.deleteEvent = function(event){
		return events.$remove(event);
	}
	
	eventFactory.updateEvent = function(event){
		return events.$save(event);
	}
	
	return eventFactory;
	
}])


