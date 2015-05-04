angular.module('ClientCtrl', [])
    .controller('ClientController', ['$scope','ClientService',function($scope,ClientService){
        /*$scope.gridOptions.columnDefs = [
            {field: 'name', visible: true},
            {field: 'id', visible: false},
            {field: 'isActive', visible: true},
            {field: 'createdDate', visible: true},
            {field: 'modifiedDate', visible: true}
        ];*/

        ClientService.getAll().success(function(data){

            $scope.clientGrid = {
                    columnDefs: [
                        {field: 'name', visible: true},
                        {field: 'id', visible: false},
                        {field: 'isActive', visible: true},
                        {field: 'createdDate', visible: true},
                        {field: 'modifiedDate', visible: true}
                    ],
                    data: data
                };
        });
            //[{FirstName: 'Fred', LastName: 'Flintstone'}];
    }]);
