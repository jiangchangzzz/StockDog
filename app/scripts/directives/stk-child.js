'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkChild
 * @description
 * # stkChild
 */
angular.module('stockDogApp')
  .directive('stkChild', function () {
    return {
      template: '<button ng-click="click()">click</button>{{read}}',
      restrict: 'E',
      require: '^stkParent',
      link: function postLink(scope, element, attrs,stkParent) {
        scope.click=stkParent.add;
        scope.read=stkParent.num;
      }
    };
  });
