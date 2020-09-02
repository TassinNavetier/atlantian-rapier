var router = angular.module('router', ['ngRoute']);
router
.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : "app/components/home/homeTemplate.html",
      controller : "HomeController"
    })
    .when("/resources", {
      templateUrl : "app/components/resources/resourcesTemplate.html",
      controller: "ResourcesController"
    })
    .when("/awards", {
      templateUrl : "app/components/awards/awardsTemplate.html",
      controller: "AwardsController"
    })
    .when("/army", {
      templateUrl : "app/components/army/armyTemplate.html",
      controller: "ArmyController"
    })
})
