var makeBinarySearchTree = function(value){
  var newBST = {
    right: null,
    left : null,
    value: value
  };
  return _.extend(newBST, binarySearchTreeMethods);
};

var binarySearchTreeMethods = {
  insert:      function(value) {
    var newNode = function(){
      return makeBinarySearchTree(value);
    };
    if (this && this.value){
      if (value > this.value) {
        this.right ? this.right.insert(value) : (this.right = newNode());
      } else if (value < this.value) {
        this.left  ? this.left .insert(value) : (this.left  = newNode());
      }
    } else {
      this.value = value;
    }
  },
  contains:      function(target) {
    if (this.value === target){
      return true;
    } else if (target > this.value) {
      return (this.right) ? this.right.contains(target) : false;
    } else {
      return (this.left)  ? this.left .contains(target) : false;
    }
  },
  depthFirstLog:        function(callback) {
    callback.call(this, this.value);
    if (this.left){
      this.left. depthFirstLog(callback);
    }
    if (this.right){
      this.right.depthFirstLog(callback);
    }
  },
  breadthFirstLog: function(callback) {
    var queue = [];
    var queueVal = [];
    var inspection;
    queue.push(this);
    while(queue.length > 0){
      inspection = queue.pop();
      if (inspection.left){
        queue.unshift(inspection.left);
      }
      if (inspection.right){
        queue.unshift(inspection.right);
      }
      queueVal.unshift(inspection.value);

      callback(inspection.value);
    }
  }
};