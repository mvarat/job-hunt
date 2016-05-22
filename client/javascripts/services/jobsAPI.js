console.log("api loaded");

angular
  .module('JobsAPI', [])
  .factory('jobsAPI', ['$http',
    function($http) {
      return {

        getAll: function(){
          return $http.get('/api/jobs');
        },
        save: function(newJob){
          return $http.post('/api/jobs', newJob);
        },
        update: function(id){
          return $http.put('/api/jobs/' + id);
        },
        remove: function(id){
          return $http.delete('/api/jobs/' + id);
        }
      }
    }])
