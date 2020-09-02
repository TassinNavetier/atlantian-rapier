var home = angular.module('home-controller', ['ui.bootstrap']);
home
.controller('HomeController', ['$scope', function($scope){
  $scope.interval = 6000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var currIndex = 0;
  $scope.slides = [
    {
      image: 'assets/img/minecraft1.jpg',
      text: 'minecraft1',
      id: currIndex++
    },
    {
      image: 'assets/img/minecraft2.jpg',
      text: 'minecraft2',
      id: currIndex++
    },
    {
      image: 'assets/img/minecraft3.jpg',
      text: 'minecraft3',
      id: currIndex++
    }
  ];
}]);
