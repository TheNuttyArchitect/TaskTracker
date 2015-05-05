angular.module('ClientCtrl', [])
    .controller('ClientController', ['$scope','ClientService',function($scope,ClientService){
        ClientService.getAll().success(function(data){

            $scope.clientGrid = {
                    columnDefs: [
                        {field: 'name', width: 300},
                        {field: 'id', visible: false},
                        {field: 'isActive', width: 50},
                        {field: 'createdDate', width: 100, cellFilter: 'date:\'MM-dd-yyyy\''},
                        {field: 'modifiedDate', width: 100, cellFilter: 'date:\'MM-dd-yyyy\''}
                    ],
                    data: data
                };
        });
    }]);
