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
    //debugger;
    if (this && this.value){
      //debugger;
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
      return (this.right) ? this.contains.call(this.right, target) : false;
    } else {
      return (this.left)  ? this.contains.call(this.left , target) : false;
    }
  },
  traverse:        function(callback) {

  },
  depthFirstLog:   function(callback) {

  },
  breadthFirstLog: function(callback) {

  }
};