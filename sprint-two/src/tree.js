var makeTree = function(value){
  var newTree = {
    value: value,
    children: null,
    parent  : null
  };
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {
  addChild: function(value){
    var newTree = makeTree(value);
    newTree.parent = this;
    if(this.children){
      this.children.push(newTree);
    }else{
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
        var truthyness = child.value !== that.value;
        return truthyness;
      });
      if (this.parent.children.length === 0) this.parent.children = null;
      this.parent = null;
    }
    return this;
  }
};