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
  });
  it('it should return a false positive rate close to the one predicted (check the log)', function(){
    var set = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h", "i",
           "j", "k", "l", "m", "n", "o", "p", "q", "r"];
    var notInSet = ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var m = 10; m<100; m++){
      bloomFilter = new BloomFilter(m);
      _.each(set, function(val){
        bloomFilter.store(val);
      });
      var falsePositives = 0;
      _.each(notInSet, function(key){
        if(bloomFilter.has(key)){
          falsePositives++;
        };
      });
      empiricalResult = falsePositives/notInSet.length;
      expectation = Math.pow(1-Math.exp(-1/m*set.length*3),3);
      console.log(empiricalResult/expectation);
    }
    console.log("Expect values close to 1");
  });
});
