var Queue = function() {
  this.syze = 0;
};

Queue.prototype = {
  constructor: Queue,
  enqueue : function(value){
    this.syze ++;
    this[this.syze] = value;
  },
  dequeue : function(){
    if (this.syze){
      for (var i = 0; i < this.syze; i++){
        this[i] = this[i+1];
      }
      this.syze--;
      return this[0];
    }
  },
  size : function(){
    return this.syze;
  }
};