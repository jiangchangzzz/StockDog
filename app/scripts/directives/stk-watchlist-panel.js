'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDogApp')
  .directive('stkWatchlistPanel', function ($location,$modal,$stateParams,$state,WatchlistService) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'views/templates/watchlist-panel.html',
      link: function($scope){
        $scope.watchlist={};

        $scope.watchlists=WatchlistService.query();

        var addListModal=$modal({
          scope: $scope,
          template: 'views/templates/addlist-modal.html',
          show: false
        });

        $scope.showModal=function(){
          addListModal.$promise.then(addListModal.show);
        };

        $scope.createList=function(){
          WatchlistService.add($scope.watchlist);
          addListModal.hide();
          $scope.watchlist={};
        };

        $scope.deleteList=function(list){
          WatchlistService.remove(list);
        };
      }
    };
  });
