var Graph = function(){
  this.nodes = {};
};

var Node = function(value, edge){
  this.value = value;
}

Graph.prototype = {
  addNode: function(newNode, toNode){
    this.nodes[newNode] = new Node(newNode);
  },
  contains: function(node){
    return !!this.nodes[node];
  },
  removeNode: function(node){
  },
  getEdge: function(fromNode, toNode){
  },
  addEdge: function(fromNode, toNode){
  },
  removeEdge: function(fromNode, toNode){
  }
};
