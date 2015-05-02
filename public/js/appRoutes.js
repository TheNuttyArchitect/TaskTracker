angular.module('appRoutes',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/taskentry.html',
            controller: 'ClientController' // TODO: Update to the proper controller
        })
        .when('/clients', {
            templateUrl: 'views/clientlist.html',
            controller: 'ClientController'
        });

    $locationProvider.html5Mode(true);
}]);
