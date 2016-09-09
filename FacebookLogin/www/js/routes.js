angular.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome.html',
        controller: 'WelcomeCtrl'
    })
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    })

    $urlRouterProvider.otherwise('/welcome');
})