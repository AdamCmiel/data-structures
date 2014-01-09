var expect = chai.expect;
var assert = chai.assert;

describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    console.log(linkedList);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
  });

  it("should make new node the head and the tail of an empty list", function(){
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(5);
    expect(linkedList.tail.value).to.equal(5);
  });
  it("should expect that the second refers to first", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.tail.prev.value).to.equal(5);
  });
  it("should be able to add to head.", function() {
    linkedList.addToHead(5);
    linkedList.addToHead(6);
  });

  it ('should not error if removeTail or removeHead is called on an empty list', function(){
    var bind = function(fn, context) {
      return function() {
        return fn.apply(context, arguments);
      };
    };
    var removeHead = bind(linkedList.removeHead, linkedList);

    linkedList.addToTail(4);
    linkedList.removeTail();
    linkedList.removeTail();

    linkedList.addToHead(178);
    linkedList.removeHead();
    linkedList.removeHead();
  });

  it ('list head and list tail should be null when list empty', function(){
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
    linkedList.addToHead("lol");
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
    linkedList.addToTail("lol");
    linkedList.removeTail();
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);

  });

  it ("should expect the head's prev after removed head to be null", function(){
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    linkedList.removeHead();
    linkedList.removeTail();
    expect(linkedList.head.prev).to.equal(null);
    expect(linkedList.tail.next).to.equal(null);
  });
});
