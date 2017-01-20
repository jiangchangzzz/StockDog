'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('WatchlistCtrl', function ($scope,$stateParams,$modal,CompanyService,WatchlistService) {
    $scope.companies=CompanyService.query();
    $scope.watchlist=WatchlistService.query($stateParams.listId);

    $scope.newStock={};
    var addStockModal=$modal({
      scope: $scope,
      template: 'views/templates/addstock-modal.html',
      show: false
    });

    $scope.showStockModal=function(){
      addStockModal.$promise.then(addStockModal.show);
    };

    $scope.addStock=function(){
      $scope.watchlist.addStock({
        listId: $stateParams.listId,
        company: $scope.newStock.company,
        shares: $scope.newStock.shares
      });
      addStockModal.hide();
      $scope.newStock={};
    };
  });
