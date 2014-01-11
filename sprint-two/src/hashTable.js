var HashTable = function(){
  this._contains = 0;
  this._limit = 8;
  this._storage = this.makeStorage()
};

HashTable.prototype = {
  makeStorage: function(){
    var that = this;
    return _.map(Array(that._limit) , function(bucket){
      return [];
    });
  },
  insert:  function(k, v, options){
    if (!options) {
      this._contains++;
    }
    var i = getIndexBelowMaxForKey(k, this._limit);
    var newPair = [k,v];
    if(this._storage[i]){
      this._storage[i].push(newPair);
    }else{
      this._storage[i] = [newPair];
    }
    if (this._contains > 0.75*this._limit){
      this.resize({double: true});
    }
  },
  retrieve: function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var out = null;
    if(this._storage[i]){
      out = _.filter(this._storage[i], function(item){
        return item[0] === k;
      });
      return out[0][1];
    }else{
      return out;
    }
  },
  remove: function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var out = null;
    var that = this;
    _.each(that._storage[i], function(item, index){
      if (item[0] === k){
        for (var j = index; j<that._storage.length; j++){
            that._storage[i][j] = that._storage[i][j+1];
        }
      }
    });
    this._contains--;
    debugger;
    if (this._contains < 0.25*this._limit){
      this.resize({half:true});
    }   
  },
  resize: function(options){

    /*key value pairs are stored in objects or arrays of objects
    this._storage = {
      h1: {k1, v1},
      h2: [{k2, v2}, {k4, v4}],
      h3: {k3, v3}
    }

    in this instance i(k2) === i(k4) and there was a collision
    /**/
    var keyValuePairs = [];

    _.each(this._storage, function(bucket, key){
      if (bucket){
        _.each(bucket, function(item){
          if (item) {
            keyValuePairs.push(item);
          }
        });
      }
    });
    
    if (options.double){
      this._limit *=2;
    } else if (options.half){
      this._limit /=2;
    } else {
      error("Put in a proper parameter dumbass");
    }

    this._storage = this.makeStorage();

    var that = this;

    _.each(keyValuePairs, function(pair){
      //debugger;
      var key = pair[0];
      var value = pair[1];
      that.insert(key, value, {increment: false});
    });
  }
};
