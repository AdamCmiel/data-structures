var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  list.contains = function(target, node){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
