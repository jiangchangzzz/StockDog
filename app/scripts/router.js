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

    $urlRouterProvider.otherwise('/test/message');

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

    $stateProvider.state(
        'test',
        {
            url: '/test',
            template: '<div ui-view></div>',
            abstract: true
        }
    );

    $stateProvider.state(
        'test.message',
        {
            url: '/message',
            templateUrl: 'views/message.html',
            controller: 'MessageCtrl as vm'
        }
    );

    $stateProvider.state(
        'test.directive',
        {
            url: '/directive',
            templateUrl: 'views/directive.html',
        }
    );

    $stateProvider.state(
        'test.login',
        {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl as vm'
        }
    );

    $stateProvider.state(
        'test.vm',
        {
            url: '/vm',
            templateUrl: 'views/vm.html',
            controller: 'VmCtrl as vm'
        }
    )
});
