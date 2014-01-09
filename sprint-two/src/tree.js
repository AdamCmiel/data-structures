var makeTree = function(value){
  var newTree = {
    value: value,
    children: null,
    parent  : null,
    childID : null
  };
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {
  addChild: function(value){
    var newTree = makeTree(value);
    newTree.parent = this;
    if(this.children){
      newTree.childID = this.children.length;
      this.children.push(newTree);
    }else{
      newTree.childID = 0;
      this.children = [newTree];
    }
  },
  contains: function(target){
    var children = this.children;
    if(children){
      return _.some(children, function(child){
        return (child.value === target) ? true : child.contains(target);
      });
    }
  },
  removeFromParent: function(){
    if (this.parent){
      var that = this;
      this.parent.children = _.filter.call(that, that.parent.children, function(child){
        return child.childID !== that.childID;
      });
      if (this.parent.children.length === 0) this.parent.children = null;
      this.parent = null;
    }
    return this;
  }
};