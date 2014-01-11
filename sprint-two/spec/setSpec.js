var expect = chai.expect;
var assert = chai.assert;

describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    assert.isTrue(set.contains("Danny Glover"));
    assert.isTrue(set.contains("Susan Sarandon"));
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    assert.isFalse(set.contains('Mel Gibson'));
  });
  it("should handle numbers as well as strings", function(){
    set.add(4);
    assert.isTrue(set.contains(4));
  });
  it("should be able to handle objects of any type", function(){
    set.add({a: 234});
    assert.isTrue(set.contains({a: 234}));
  });
  it("should be able to remove objects of any type", function(){
    set.add({a: 234});
    set.remove({a:234});
    assert.isFalse(set.contains({a: 234}));
  });
});
