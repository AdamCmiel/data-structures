var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance.syze = 0;
  return instance;
};

var queueMethods = {
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