var assert = chai.assert; 

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should insert values at the correct location in the tree", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });
  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func  = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(_.isEqual(array, _.intersection(array, [5,2,3]))).to.be.true;
  });
  it("should execute a callback in the correct order", function(){
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    
    var expectation = [5,3,7,2,4,6,8];
    var result = [];
    binarySearchTree.breadthFirstLog(function(value){
      result.push(value);
    });
    expect(_.isEqual(expectation, result)).to.be.true;
  });
  it('should balance the tree', function(){
    var values = [6,7,8,9,1,2,3,4,10,11,12,13,14,15,16];
    _.each(values, function(val){
      binarySearchTree.insert(val);
    });
    binarySearchTree.rebalance();
    var result = [];
    binarySearchTree.breadthFirstLog(function(val){
      result.push(val);
    });
    expect(_.isEqual(result, [8,4,12,2,6,10,14,1,3,5,7,9,11,13,15,16])).to.be.true;
  });
});
