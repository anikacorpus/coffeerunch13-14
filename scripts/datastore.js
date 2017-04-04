(function(window){
  'use strict';
  var App = window.App || {};

  function DataStore(){
    this.data = {};
  };

  //accepts a key and and adds a value
  DataStore.prototype.add = function(key,val){
    this.data[key] = val;
  };

  DataStore.prototype.get = function (key){
    return this.data[key];
  };

  DataStore.prototype.getAll = function(){
    return this.data;
  };

  DataStore.prototype.remove = function (key){

    //removes a key/value pair
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;

})(window);
