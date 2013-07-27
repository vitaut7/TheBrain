var _now = function() {
    return moment().hours(0).minutes(0).seconds(0).milliseconds(0)._d;
}

var _fullNow = function() {
	return moment()._d;
}

if (!Meteor.moment) Meteor.moment = {};
_.extend(Meteor.moment, {
    now: _now,
    fullNow: _fullNow
});