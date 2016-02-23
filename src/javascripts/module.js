'use strict';

var app = angular.module('testApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', { url: '/', templateUrl: '/templates/home.html' })
    .state('login', { url: '/login', templateUrl: './templates/login.html', controller: 'loginCtrl' })

})

.run(function(){
  console.log('Ready');
})
