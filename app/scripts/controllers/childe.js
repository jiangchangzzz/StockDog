'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:ChildeCtrl
 * @description
 * # ChildeCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('ChildeCtrl', function ($scope) {
    $scope.$on('ping',function(){
      console.log('ping');
    });

    $scope.$emit('pong');
  });
