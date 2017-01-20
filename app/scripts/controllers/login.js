'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('LoginCtrl', function ($scope,$modal,$rootScope,userService) {
    var vm=this;
    vm.user=userService;

    var loginModal=$modal({
      scope: $scope,
      template: 'views/templates/loginModal.html',
      show: false
    });

    vm.showLoginModal=function(){
      loginModal.$promise.then(loginModal.show);
    };

    vm.login=function(){
      vm.user.login(vm.newUser.name,vm.newUser.password);
      loginModal.hide();
    };

    $rootScope.red=3;
  });
