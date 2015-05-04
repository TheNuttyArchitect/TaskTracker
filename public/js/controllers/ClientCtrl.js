angular.module('ClientCtrl', [])
    .controller('ClientController', ['$scope','ClientService',function($scope,ClientService){
        ClientService.getAll().success(function(data){
            $scope.clients = data;
        });
            //[{FirstName: 'Fred', LastName: 'Flintstone'}];
    }]);
