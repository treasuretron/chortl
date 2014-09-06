/*global console, angular */
'use strict';

var chortl = angular.module('chortl', ['ngRoute', 'ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', {templateUrl: 'views/home.html'})
    .when('/about', {templateUrl: 'views/about.html'})
    .when('/new', {templateUrl: 'views/new_house.html'})
    // .when('/house/:house_id', {templateUrl: 'views/about.html'})
    .otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
  }]);

chortl.controller('newHouse', function ($scope, houseService) {
    $scope.data = houseService.data;

});


chortl.service('houseService', function ($http) {
    
    this.data = {
        name:"",
        housemates:[{
            name:"",
            email:""
        }],
        chores:[{
            name:"",
            description:""
        }]

    };

    this.removeMate = function(index){

    };

    this.addMate = function(){
        
    };

    this.submit = function() {
        $http.post('/household', this.data).success(
            console.log("success: ")
        );
    };
});