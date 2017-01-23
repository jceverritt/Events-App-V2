app.factory('eventFactory', function () {
    var factory = {};
    var eventList = [];
    var init = function () {
        if (localStorage["eventList"] != null && localStorage["eventList"] != null) {
            eventList = JSON.parse(localStorage["eventList"]);
        } else {
            eventList.push({Name:'Presentation', UserId:1});
        }
    }
    init();

    factory.getEvents = function () {
        if (localStorage["eventList"] != null && localStorage["eventList"] != null) {
            eventList = JSON.parse(localStorage["eventList"]);
        }
        return eventList;
    }

    factory.getEventsByUserId = function (userId) {
        var userEvents = [];
        if (localStorage["eventList"] != null && localStorage["eventList"] != null) {
            eventList = JSON.parse(localStorage["eventList"]);
        }
        for (var i = 0; i < eventList.length; i++) {
            if (eventList[i].UserId == userId) {
                userEvents.push(eventList[i]);
            }
        }
        return userEvents;
        
    }

    factory.addNewEvent = function (event) {
        if (localStorage["eventList"] != null && localStorage["eventList"] != null) {
            eventList = JSON.parse(localStorage["eventList"]);
            eventList.push(event);
        } else {
            eventList.push(event);
        }
        localStorage["eventList"] = JSON.stringify(eventList);
    }
    factory.deleteEvent = function (selectedEvent) {
        if (localStorage["eventList"] != null && localStorage["eventList"] != null) {
            eventList = JSON.parse(localStorage["eventList"]);
        }

        for (var i = 0; i < eventList.length; i++) {
            if (eventList[i].UserId == selectedEvent.UserId && eventList[i].Name) {
                eventList.splice(i, 1);
                break;
            }
        }
        localStorage["eventList"] = JSON.stringify(eventList);

    }
    factory.updateEvent = function (selectedEvent) {
        if (localStorage["eventList"] != null && localStorage["eventList"] != null) {
            eventList = JSON.parse(localStorage["eventList"]);
        }

        for (var i = 0; i < eventList.length; i++) {
            if (eventList[i].UserId == selectedEvent.UserId && eventList[i].Name) {
                eventList[i].Email = selectedEvent.Name;
                addEventListener[i].Mobile = selectedEvent.Mobile;
                break;
            }
        }
        localStorage["eventList"] = JSON.stringify(eventList);
    }
    return factory;
});