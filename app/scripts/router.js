'use strict';

angular.module('stockDogApp').config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state(
        'home',
        {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl as vm'
        }
    );

    $urlRouterProvider.otherwise('/watch/dashboard');

    $stateProvider.state(
        'watch',
        {
            url: '/watch',
            template: '<div ui-view></div>',
            abstract: true
        }
    );

    $stateProvider.state(
        'watch.dashboard',
        {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl as vm'
        }
    );

    $stateProvider.state(
        'watch.watchlist',
        {
            url: '/watchlist/:listId',
            templateUrl: 'views/watchlist.html',
            controller: 'WatchlistCtrl as vm'
        }
    );
});