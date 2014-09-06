/*global console, angular */
'use strict';

var chortl = angular.module('chortl', ['ngRoute', 'ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', {templateUrl: 'partials/leaderBoard'})
    // .when('/about', {templateUrl: 'partials/about'})
    // .when('/profile', {templateUrl: 'partials/profile', controller: 'profileCtrl'})
    // .when('/settings', {templateUrl: 'partials/settings'})
    // .when('/theList', {templateUrl: 'partials/theList', controller: 'challengeList'})
    // .when('/signup', {templateUrl: 'partials/signup', controller: 'signUpCtrl'})
    .otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(true);
  }]);