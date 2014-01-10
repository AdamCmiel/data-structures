var makeBinarySearchTree = function(value){
	var newBST = {
		right: null,
		left : null,
		value: value
	};
	return _.extend(newBST, binarySearchTreeMethods);
};

var binarySearchTreeMethods = {
	insert: 		 function(value) {
		var newNode = makeBinarySearchTree(value);
		//debugger;
		if (this && this.value){
			if (value > this.value) {
				this.right ? this.right.insert(newNode) : (this.right = newNode);
			} else if (value < this.value) {
				this.left  ? this.left .insert(newNode) : (this.left  = newNode);
			}
		} else {
			this.value = value;
		}
	},
	contains: 		 function(value) {
		
	},
	traverse:        function(callback) {

	},
	depthFirstLog:   function(callback) {

	},
	breadthFirstLog: function(callback) {

	}
};