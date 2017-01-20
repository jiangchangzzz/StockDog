'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:MessageCtrl
 * @description
 * # MessageCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('MessageCtrl', function ($scope,$rootScope,UserService) {

    $scope.message="read";

    $scope.$broadcast('ping');

    $scope.$on('pong',function(){
      console.log('pong');
    });

    $scope.user=UserService;

    $rootScope.blue="red";
  });
