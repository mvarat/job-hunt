console.log("controller loaded");

angular
  .module('jobController', ['JobsAPI'])
  .controller('JobController', ['$scope', '$http', 'jobsAPI',
    function( $scope, $http, jobsAPI) {

      $scope.title = "JOB HUNTER";
      $scope.jobs = [];

      // Save job
      $scope.saveJob = function(post) {
        var newJob = {
          job: {
            company: post.company,
            position: post.position,
            url: post.url,
            applied: post.applied,
            interview: post.interview,
          }
        }
        jobsAPI.save(newJob).then(function(response){
          $scope.jobs.push(response.data);
          $scope.job.company="";
          $scope.job.position="";
          $scope.job.url="";
          $scope.job.applied="";
          $scope.job.interview="";
        })
      }

      jobsAPI.getAll().then(function(response){
        $scope.jobs = response.data.jobs;
      })

      // DELETE $http to delete a job
      $scope.deleteJob = function(job) {

        jobsAPI.remove(job._id).then(function(response){
          if(response.status == 204 || response.status == 203) {
            console.log("delete");
            // return jobs that dont match id of removed job
            $scope.jobs = $scope.jobs.filter(function(i){
              return i._id != job._id;
            })
          }

        })
      }

      $scope.editJob = function(job){
        $('.edit-form').css('visibility', 'visible');
      }
      //UPDATE $http to update job
      $scope.updateJob = function(job) {
        console.log(job);
        jobsAPI.update(job).then(function(response){
          console.log("update yay");
          console.log(response);
          if(response.status == 204 || response.status == 203) {
            console.log("update");

            // return jobs that dont match id of removed job
            $scope.jobs = $scope.jobs.filter(function(i){
              return i._id != job._id;
            })
          }

        })
      }
    }
  ]);
