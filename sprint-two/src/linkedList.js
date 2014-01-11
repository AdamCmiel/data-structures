var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (!this.head) {
      this.tail = this.head = newNode;
    }else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if(!this.head){
      this.tail = this.head = newNode;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

  };


  list.removeHead = function(){
    if(this.head){
      if(!removeLastItem.apply(this)){
        this.head      = this.head.next;
        this.head.prev = null;
      }
    }
  };

  list.removeTail = function(){
    if(this.tail){
      if(!removeLastItem.apply(this)){
        this.tail      = this.tail.prev;
        this.tail.next = null;
      }
    }
  };

  list.contains = function(target, node){
    if(!node){
      node = this.head;
    }
    while (node) {
      if (node.value === target){
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  return {
    value: value,
    next : null,
    prev : null
  };
};

//If there's only one item in the list, clear the list, list
var removeLastItem = function(){
  var lastItem = (this.head.prev === null && this.head.next === null);
  if (lastItem){
        this.head = null;
        this.tail = null;
  }
  return lastItem;
};
