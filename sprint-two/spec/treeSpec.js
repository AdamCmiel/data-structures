var expect = chai.expect;
var assert = chai.assert;

describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree("topNode");
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    assert.isTrue('value' in tree);
  });

  it("should add children to the tree", function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it("should return true for a value that the tree contains", function(){
    tree.addChild(5);
    assert.isTrue(tree.contains(5));
  });

  it("should return false for a value that was not added", function(){
    tree.addChild(5);
    assert.isFalse(tree.contains(6));
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it("should correctly detect nested children", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    assert.isTrue(tree.contains(7));
    assert.isTrue(tree.contains(8));
  });
  it("should correctly point to parent trees", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    assert.isTrue(tree.children[0].children[0].parent.value === 5);
    assert.isTrue(tree.children[0].parent.value === "topNode");
  });
  it("should remove child from tree", function(){
    tree.addChild(5);
    tree.children[0].removeFromParent();
    expect(tree.children).to.equal(null);
  });
  it("should return the removed tree", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    var removedTree = tree.children[0].removeFromParent();
    expect(removedTree.children[0].value).to.equal(7);
    expect(tree.children.length).to.equal(1);
  });
  it("should return specifc removed tree", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(5);
    tree.children[0].addChild("first node");
    tree.children[2].addChild("second node");
    var removedTree = tree.children[0].removeFromParent();
    assert.isTrue(tree.children[1].children[0].value === "second node");
    assert.isTrue(removedTree.children[0].value === "first node");
  });
  it ("should call a function on all nodes in a tree", function(){
    var results = [];
    tree.addChild(2);
    tree.addChild(3);
    tree.traverse(function(){
      results.push(this.value);
    });
    expect(_.intersection(results, ["topNode",2,3]).length).to.equal(3);
  });
});
