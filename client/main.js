Meteor.subscribe("userData");
Meteor.subscribe("publicCourses");
Meteor.subscribe("myCourses");
Meteor.subscribe("myFlashcards");
Meteor.subscribe("myCollections");
Meteor.subscribe("myItems");
Meteor.subscribe("lessons");
Meteor.subscribe("theBrain");

Deps.autorun(function () {
    console.log("deps selectedCourse " + Session.get("selectedCourse"));
    Meteor.subscribe("selectedCourse", Session.get("selectedCourse"));
    setTimeout(function () {
    	
    	$("#transition").css("display", "block");
	}, 20);
});

console.log("How often are we rereading this?");

$.fn.modal.Constructor.prototype.enforceFocus = function () {}; // Fix to enable stacking modals