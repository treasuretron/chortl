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
    $scope.house = houseService;
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
        this.data.housemates.splice(index,1);
    };
    this.addMate = function(){
        this.data.housemates.push({
            name:"",
            email:""
        });
    };

    this.removeChore = function(index){
        this.data.chores.splice(index,1);
    };
    this.addChore = function(){
        this.data.chores.push({
            name:"",
            description:""
        });
    };

    this.addNewHousehold = function() {
        $http.post('/household', this.data).success(
            console.log("success: ")
        );
    };
});


chortl.controller('sendEmail', function ($scope, $http) {
    $scope.sendEmail = function(){
        $http.post("/sendEmail")
        .success(function(){
            // do a thing. Or not.
            console.log("Hi: ");
        });
    };
});