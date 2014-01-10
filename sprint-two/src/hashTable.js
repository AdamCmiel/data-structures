var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype = {
  insert:  function(k, v){
    var i = getIndexBelowMaxForKey(k, this._limit);
    this._storage[i] = v;
  },
  retrieve: function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    return this._storage[i];
  },
  remove: function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
  },
  resize: function(){
    var keyValuePairs = [];

    /*key value pairs are stored in objects or arrays of objects
    this._storage = {
      h1: {k1, v1},
      h2: [{k2, v2}, {k4, v4}],
      h3: {k3, v3}
    }

    in this instance i(k2) === i(k4) and there was a collision
    /**/
    _.each(this._storage, function(bucket, key){
      if (Array.isArray(bucket)){
        _.each(bucket, function(item){
          keyValuePairs.push(item);
        });
      } else {
        keyValuePairs.push(bucket);
      }
    });
    
    var this._limit *=2;
    this._storage = {};

    _.each(keyValuePairs, function(pair){
      var key = Object.keys(pair)[0];
      var value = pair[key];
      this.insert(key, value);
    });
  }
};
