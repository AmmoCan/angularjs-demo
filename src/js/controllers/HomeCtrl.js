angular.module('helloWorldApp')
.controller('HomeCtrl', [
  '$scope',
  function($scope) {
    $scope.message = 'Oh Snap!';
  }
]);
