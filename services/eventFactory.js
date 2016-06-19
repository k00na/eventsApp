angular.module('eventApp')
.factory('eventFactory', ['FBCAT','FBMSG', '$firebaseArray', function(FBCAT, FBMSG, $firebaseArray) {
	
	var eventFactory = {};
	// firebase ref for Events
	var ref = new Firebase(FBMSG);
	var events = $firebaseArray(ref);
	
	// firebase ref for Categories
	var catsRef = new Firebase(FBCAT);
	var cats = $firebaseArray(catsRef);
	
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
	
	eventFactory.getAllCats = function(){
		return cats;
	}
	
	
	return eventFactory;
	
}])


