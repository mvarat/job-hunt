console.log("app loaded");

angular.module('Jobs', [
  'jobController'
]);

$(document).ready(function() {
  $('.modal-trigger').leanModal();
  Materialize.updateTextFields();
});
