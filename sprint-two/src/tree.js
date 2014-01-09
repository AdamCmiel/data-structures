var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value)
  if(this.children){
    this.children.push[newTree];
  }else{
    this.children = [newTree];
  }
};

treeMethods.contains = function(target){
  var result = false;
  var children = this.children;
  for(var i = 0; i<children.length; i++){
   	if(children[i) === target){
   		result = true;
   	}else{
   		result = children[i].contains(target);
    }
 	}

// return result;
};

