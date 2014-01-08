var Stack = function() {
  this.syze = 0;
};

Stack.prototype = {
  constructor: Stack,
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