'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.UserService
 * @description
 * # UserService
 * Factory in the stockDogApp.
 */
angular.module('stockDogApp')
  .factory('UserService', function ($timeout) {
    // Service logic
    // ...

    var user = {};

    $timeout(function(){
      user.name='Username';
    },500);

    // Public API here
    return user;
  });
