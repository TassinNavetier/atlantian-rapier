var home = angular.module('nav-controller', []);
home
.controller('NavController', ['$scope', function($scope){
$scope.linkList = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Resources",
    url: "/resources"
  },
  {
    name: "Award Structure",
    url: "/awards"
  },
  {
    name: "Army",
    url: "/army"
  }]
  $scope.getUrl = function(url){

  };

}]);
