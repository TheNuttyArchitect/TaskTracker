angular.module('ClientService', []).factory('Client', ['$http', function($http){
    return {
        getAll: function() {
            return $http.get('/api/clients');
        },
        getByID: function(id){
            return $http.get('/api/clients/' + id);
        },
        create: function(clientData){
            return $http.post('/api/clients', clientData);
        },
        update: function(id,clientData){
            return $http.put('/api/clients/' + id, clientData);
        },
        delete: function(id){
            return $http.delete('/api/clients/' + id);
        }
    }
}]);