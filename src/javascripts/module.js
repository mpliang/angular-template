'use strict';

var app = angular.module('testApp', ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $urlRouterProvider.otherwise('/');
  $mdThemingProvider.theme('default')
    .primaryPalette('blue');
    
  $stateProvider
    .state('home', { url: '/', templateUrl: '/templates/home.html' })

})

.run(function(){
  console.log('Ready');
})
