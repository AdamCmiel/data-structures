var assert = chai.assert;

describe("graph", function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });
  it("should have methods named 'addNode', 'contains', 'removeNode', 'addEdge', 'getEdge', 'removeEdge' and 'forEachNode'", function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.getEdge).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
  });
  it("should store values as nodes that were inserted", function() {
    graph.addNode("kittens"); 
    assert.isTrue(graph.contains("kittens"));
  });
  it("should remove nodes that were inserted", function() {
    graph.addNode("puppies");
    graph.removeNode("puppies");
    assert.isFalse(graph.contains("puppies"));
  });
  it("should automatically create an edge between two nodes if there is only one node in the graph", function() {
    graph.addNode("puppies");
    graph.addNode("kittens");
    assert.isTrue(graph.getEdge("puppies", "kittens"));
  });

  it("should create edges between two nodes", function() {
    graph.addNode("puppies");
    graph.addNode("kittens");
    graph.addNode("penguins", "puppies");
    assert.isTrue(graph.getEdge("penguins", "puppies"));
    assert.isFalse(graph.getEdge("penguins", "kittens"));
  });
  it("should remove edges between nodes", function() {
    graph.addNode("apples");
    graph.addNode("bananas");
    graph.addNode("satsumas", "bananas");
    graph.addEdge("satsumas", "apples")
    assert.isTrue(graph.getEdge("apples", "bananas"));
    graph.removeEdge("apples", "bananas")
    assert.isFalse(graph.getEdge("apples", "bananas"));
  });
  it("should remove nodes without any edges", function() {
    graph.addNode("jacket");
    graph.addNode("hat");
    graph.removeEdge("jacket", "hat");
    assert.isFalse(graph.contains("hat"));
    assert.isFalse(graph.contains("jacket"));
  });
  it("should execute a callback function on every node in graph", function(){
    var result = [];
    var callback = function(){
      result.push(this.value);
    }
    graph.addNode("puppies");
    graph.addNode("kittens");
    graph.addNode("penguins", "puppies");
    graph.addNode("doggies", "kittens");
    var expected = ["puppies", "kittens", "penguins", "doggies"];
    graph.forEachNode(callback);
    expect(_.intersection(result,expected).length).to.equal(4);
  });
});
