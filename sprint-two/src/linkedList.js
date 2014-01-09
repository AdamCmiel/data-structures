var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    }else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if(!this.head){
      this.tail = newNode;
      this.head = newNode;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

  };


  list.removeHead = function(){
    if(this.head){
      if (this.head.prev === null && this.head.next === null){
        this.head = null;
        this.tail = null;
      }
      this.head && (this.head = this.head.next);
      this.head && (this.head.prev = null);
      
    }
  };

  list.removeTail = function(){
    if(this.tail){
      if (this.head.prev === null && this.head.next === null){
        this.head = null;
        this.tail = null;
      }
      this.tail && (this.tail = this.tail.prev);
      this.tail && (this.tail.next = null);
      
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
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
