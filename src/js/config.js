'use strict';

var app = angular.module('testApp');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    
  $urlRouterProvider.otherwise('/');
});
