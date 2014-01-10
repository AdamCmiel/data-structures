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
      this._storage[i] = subArray.push(newHash);
    }else{
      this._storage[i] = newHash;
    }
  },
  retrieve: function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    return this._storage[i][k];
  },
  remove: function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    this._storage[i] = null;
  }
};
