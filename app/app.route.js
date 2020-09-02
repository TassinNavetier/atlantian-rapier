var router = angular.module('router', ['ngRoute']);
router
.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : "app/components/home/homeTemplate.html"
    })
})
