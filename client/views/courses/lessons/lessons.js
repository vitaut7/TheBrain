Template.lessonsTable.lesson = function () {
    _course = Courses.findOne({_id: Session.get("selectedCourse")});
    return _course ? _course.lessons : [];
}


Template.lessonsTable.rendered = function () {

    $.fn.editable.defaults.mode = 'inline';

    $('.lesson-name.editable:not(.editable-click)').editable('destroy').editable({
        success: function (response, newName) {
            //Lessons.update($(this).attr("data-id"), {$set: {name: newName}});
        }});

    $('.lesson-description.editable:not(.editable-click)').editable('destroy').editable({
        success: function (response, newDescription) {
            //Lessons.update($(this).attr("data-id"), {$set: {shortDescription: newDescription}});
        }});

}


Template.lessonsTable.events({
    "click .lessonRow .editable": function(e) {
        console.log("click ", e);
        e.preventDefault();
        e.stopPropagation();
    },
    "click .lessonRow .btn": function(e) {
        e.stopPropagation();
    },
    "click .lessonRow:not(.editable), click .btn-enterLesson": function(e) {
        console.log("this " + this._id);
        Meteor.Router.to('/lesson/' + this._id);
    },
    "click .btn-addLessonModal": function (e, template) {
        e.preventDefault();
        $('#newLessonModal').modal('show');
    },
    "click .btn-addFlashcardToLesson": function (e, template) {
        e.preventDefault();
        console.log("this._id", this._id);
        $("#newFlashcardModal").modal('show');
        Session.set("selectedLesson", this._id);

    }
});