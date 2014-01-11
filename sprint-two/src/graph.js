var Graph = function(){
  this.nodes = {};
};

var Node = function(value){
  this.value = value;
  this.edges = {};
}

Graph.prototype = {
  addNode: function(newNode, toNode){
    var nodeKeys = Object.keys(this.nodes);
    var nodeAdded = new Node(newNode);
    this.nodes[newNode] = nodeAdded;
    
    if (nodeKeys.length === 1) {
      var firstNode = this.nodes[nodeKeys[0]];
      this.addEdge(firstNode, nodeAdded);
    }
  },
  contains: function(node){
    return !!this.nodes[node];
  },
  removeNode: function(node){
    if (this.nodes[node]){
      delete this.nodes[node];
    }
  },
  getEdge: function(fromNode, toNode){
    return !!this.nodes[fromNode].edges[toNode];
  },
  addEdge: function(fromNode, toNode){
    fromNode.edges[toNode.value] = toNode;
    toNode.edges[fromNode.value] = fromNode;
  },
  removeEdge: function(fromNode, toNode){
  }
};
