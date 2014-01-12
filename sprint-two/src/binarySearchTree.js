var makeBinarySearchTree = function(value){
  var newBST = {
    right: null,
    left : null,
    value: value,
  };
  return _.extend(newBST, binarySearchTreeMethods);
};

var binarySearchTreeMethods = {
  insert:      function(value, rebalancing) {
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
    if(!rebalancing && this.maxDepth() > 2){
      if(this.maxDepth() > 2*this.minDepth()){
        debugger;
        this.rebalance();
      }
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
      callback(inspection.value);
    }
  }, 
  rebalance: function(){
    //Grab the sorted values of the tree
    var treeNodes = [];
    this.depthFirstLog(function(val){
      treeNodes.push(val);
    });
    treeNodes = treeNodes.sort(function(a,b){return a-b;});

    //Recursively fill the queue
    var queue = [];
    var balance = function(store){
      var middle = Math.ceil(store.length/2);
      var left = store.splice(0, middle);
      var right = store;
      queue.push(left.pop());
      left.length  && balance(left);
      right.length && balance(right);
    };
    balance(treeNodes);

    //Rewrite the tree
    var tree = this;
    this.value = null;
    tree.left = null;
    tree.right = null;

    //Fill the tree
    _.each(queue, function(node){
      tree.insert(node, true);
    });
  },
  maxDepth: function(){
    var maximumDepth  = 0;
    var depth = function(dep){
      if ((dep+1)>maximumDepth) maximumDepth = dep+1;
      this.left  && depth.call(this.left , dep+1);
      this.right && depth.call(this.right, dep+1);
    }
    depth.call(this, 0);
    return maximumDepth-1;
  },
  minDepth: function(){
    var count = 0;
    var queue = [];
    var inspection;
    queue.push(this);
    while(queue.length > 0){
      inspection = queue.pop();
      count++; 
      if (inspection.left && inspection.right){
        queue.unshift(inspection.left);
        queue.unshift(inspection.right);
      } else {
        return Math.floor(Math.log(count)/Math.log(2));
      }
    }
  }
};
