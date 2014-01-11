var BloomFilter;

(function(){
  BloomFilter = function(length){
    this._limit = length;
    this._storage = makeStorage.call(this);
  }

  var makeStorage = function(){
    var that = this;
    return _.map(Array(that._limit) , function(){
      return false;
    });
  };

  BloomFilter.prototype = {
    store: function(items){
      var hash;
      var that = this;
      _.each(items, function(item){
        _.each(hashes, function(hashFxn){
          hash = hashFxn.call(that, item);
          that._storage[hash] = true;
        });
      });
    },
    has: function(item){
      var that = this;
      var hashedIndicies = _.map(hashes, function(hashFxn){
        return hashFxn.call(that, item);
      });
      return _.reduce(hashedIndicies, function(memo, index){
        return memo && that._storage[index];
      }, true);
    }
  };

  var h1 = function(key){
    return hash % this._limit;
  };
  var h2 = function(key){
    return hash % this._limit;
  };
  var h3 = function(key){
    return hash % this._limit;
  };
  var hashes = [h1,h2,h3];

})()