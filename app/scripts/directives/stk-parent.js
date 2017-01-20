'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkParent
 * @description
 * # stkParent
 */
angular.module('stockDogApp')
  .directive('stkParent', function () {
    return {
      restrict: 'EA',
      controller: function($scope){
        var vm=this;
        vm.num=0;

        this.add=function(){
          ++vm.num;
        };
      },
    };
  });
