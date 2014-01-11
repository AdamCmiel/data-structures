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
      debugger;
      var firstNode = this.nodes[nodeKeys[0]];
      this.addEdge(firstNode.value, nodeAdded.value);
    }
    if (toNode){
      this.addEdge(nodeAdded.value, toNode)
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
    this.nodes[fromNode].edges[toNode] = toNode;
    this.nodes[toNode].edges[fromNode] = fromNode;
  },
  removeEdge: function(fromNode, toNode){
    delete this.nodes[fromNode].edges[toNode];
    delete this.nodes[toNode].edges[fromNode];
  }
};
