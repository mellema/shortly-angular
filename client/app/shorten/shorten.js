angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    Links.newLink($scope.link)
    .then(function(){
      $.location.path('/shorten');
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
