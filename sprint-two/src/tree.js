var makeTree = function(value){
  var newTree = {
    value: value,
    children: undefined
  };
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  if(this.children){
    this.children.push(newTree);
  }else{
    this.children = [newTree];
  }
};

treeMethods.contains = function(target){
  var children = this.children;
  if(children){
    return _.some(children, function(child){
      return (child.value === target) ? true : child.contains(target);
    });
  }
};

