'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.WatchlistService
 * @description
 * # WatchlistService
 * Service in the stockDogApp.
 */
angular.module('stockDogApp')
  .service('WatchlistService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var stockModel={
      save: function(){
        var watchlist=findById(this.listId);
        watchlist.recalculate();
        saveModel();
      }
    };

    var watchlistModel={
      //添加股票
      addStock: function(stock){
        var exist=_.find(this.stocks,function(s){
          return s.company.symbol===stock.company.symbol;
        });
        
        if(exist){
          exist.shares+=stock.shares;
        }
        else{
          _.extend(stock,stockModel);
          this.stocks.push(stock);
        }

          this.recalculate();
          saveModel();
      },

      //删除股票
      removeStock: function(stock){
        _.remove(this.stocks,function(s){
          return s.company.symbol===stock.company.symbol;
        });

        this.recalculate();
        saveModel();
      },

      //重新计算总和
      recalculate: function(){
        _.reduce(this.stocks,function(result,s){
          result.shares+=s.shares;
          result.marketValue+=result.marketValue;
          result.dayChange+=result.dayChange;
          return result;
        },{shares: 0,marketValue: 0,dayChange: 0});
      }
    };

    //读取监控列表
    var loadModel=function(){
      var model={
        watchlists: localStorage['StockDog.watchlists']?
          JSON.parse(localStorage['StockDog.watchlists']):[],
        nextId: localStorage['StockDog.nextId']?
          parseInt(localStorage['StockDog.nextId']):0,
      };
      
      _.each(model.watchlists,function(w){
        _.extend(w,watchlistModel);

        _.each(w.stocks,function(s){
          _.extend(s,stockModel);
        });
      });
      return model;
    };

    //存储监控列表
    var saveModel=function(){
      localStorage['StockDog.watchlists']=JSON.stringify(Model.watchlists);
      localStorage['StockDog.nextId']=Model.nextId;
    };

    var findById=function(listId){
      return _.find(Model.watchlists,function(watchlist){
        return watchlist.id===parseInt(listId);
      });
    };

    this.query=function(listId){
      if(listId){
        return findById(listId);
      }
      else{
         return Model.watchlists;
      }
    };

    this.add=function(watchlist){
      watchlist.id=Model.nextId++;
      watchlist.stocks=[];
      _.extend(watchlist,watchlistModel);
      Model.watchlists.push(watchlist);
      saveModel();
    };

    this.remove=function(watchlist){
      _.remove(Model.watchlists,function(list){
        return list.id===watchlist.id;
      });
      saveModel();
    };

    var Model=loadModel();
  });
