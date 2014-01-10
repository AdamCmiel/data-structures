var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype = {
  insert:  function(k, v){
    var i = getIndexBelowMaxForKey(k, this._limit);
    var newHash = {};
    newHash[k]=v;
    if(this._storage[i]){
      var subArray = [];
      subArray.push(this._storage[i]);
      subArray.push(newHash);
      this._storage[i] = subArray;
    }else{
      this._storage[i] = newHash;
    }
  },
  retrieve: function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    if(Array.isArray(this._storage[i])){
      var result = _.filter(this._storage[i], function(value){
        if(Object.keys(value)[0] === k ){
          return  true;
        }
      });
      return result[0][k];
    }else if(this._storage[i]){
      return this._storage[i][k];
    }else{
      return null;
    }

  },
  remove: function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    if(Array.isArray(this._storage[i])){
      _.each(this._storage[i], function(value){
        if(value[key] === ""+k){
          this._storage = null;
        }
      });
    }else{
      this._storage[i] = null;
    }
  }
};
