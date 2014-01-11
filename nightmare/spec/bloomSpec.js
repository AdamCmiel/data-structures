var assert = chai.assert; 

describe("Bloom Filter", function() {

  var bloomFilter;

  beforeEach(function() {
  	bloomFilter = new BloomFilter(18);
  });

  it('it should false if value is not in set', function(){
  	var set = ["dog", "cat", "bird"];
  	bloomFilter.store(set);
  	assert.isFalse(bloomFilter.has("plane"));
  });
  it('it should probably return true for a value that is in set', function(){
  	var set = ["dog"];
  	bloomFilter.store(set);
  	assert.isTrue(bloomFilter.has("dog"));
  });
  it('it should return a false posititve for an overloaded set', function(){
  	var set = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
  			   "j", "k", "l", "m", "n", "o", "p", "q", "r"];
    bloomFilter.store(set);
    assert.isTrue(bloomFilter.has("z"));
  })
});