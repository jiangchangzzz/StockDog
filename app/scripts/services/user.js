'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.user
 * @description
 * # user
 * Service in the stockDogApp.
 */
angular.module('stockDogApp')
  .factory('userService', function ($timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var user={
      isLogin: false
    };

    user.loginFromServer=function(){
      $timeout(function(){
        user.isLogin=true;
        user.name="username";
      },500);
    };

    user.login=function(name,password){
      user.isLogin=true;
      user.name=name;
    };

    user.logout=function(){
      user.isLogin=false;
      user.name=undefined;
    };

    user.loginFromServer();
    return user;
  });
