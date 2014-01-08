var makeStack = function(){
  var instance = {
    syze: 0
  };
  return _.extend(instance, stackMethods);
};

var stackMethods = {
  push: function(value){
    this.syze++;
    this[this.syze] = value;
  },
  pop: function(){
    if (this.syze){
      var out = this[this.syze];
      delete this[this.syze];
      this.syze--;
      return out;
    }
  },
  size: function(){
    return this.syze;
  }
};