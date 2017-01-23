app.controller('eventsController', function ($scope, $location,$route,userFactory, eventFactory) {
    $scope.newEvent = {};
    $scope.selectedUser = {};
    $scope.selectedEvent = {};
    var init = function () {
       
        if (sessionStorage["loggedUsername"] != null && sessionStorage["loggedUsername"] != undefined) {
           
            var loggedUsername = sessionStorage["loggedUsername"];
          
            $scope.selectedUser = userFactory.getUserByName({ Username: loggedUsername });
            $scope.userEvents = eventFactory.getEventsByUserId($scope.selectedUser.Id);
        }
    }
    init();
    

    $scope.saveEvent = function () {
        $scope.newEvent.UserId = $scope.selectedUser.Id;
        eventFactory.addNewEvent($scope.newEvent);
        $location.path('/viewEvents');
    }
    $scope.cancelEvent = function () {
        $location.path('/viewEvents');
    }
    $scope.setCurrentEvent = function (userEvent) {
        //$('#myModal').modal('show')
        $scope.selectedEvent = userEvent;
    }
    $scope.deleteEvent = function () {
        eventFactory.deleteEvent($scope.selectedEvent);
        $scope.selectedEvent = null;
        $route.reload();
        $('#myModal').modal('hide')
    }


    $scope.editEvent = function (userEvent) {
        //$('#myEditEventModal').modal('show')
        $scope.selectedEvent = userEvent;
    }
    $scope.viewEvent = function (userEvent) {
        //$('#myViewEventModal').modal('show')
        $scope.selectedEvent = userEvent;
    }
    $scope.updateEvent = function () {
        eventFactory.updateEvent($scope.selectedEvent);
        $scope.selectedEvent = null;
        $route.reload();
        $('#myEditEventModal').modal('hide')
    }
    
    
    
    
    
    
});