function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}
 
function LinkedList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.add = function(value) {
    var node = new Node(value);
 
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
 
    this._length++;
 
    return node;
};

LinkedList.prototype.deleteDups = function(n){
	var holder = new Set();
	var previous;
	
	while(n !== null) {
		if (holder.has(n.data)) {
			previous.next = n.next;
		} else {
			holder.add(n.data);
			previous = n;
		}
		n = n.next;
	}
};

LinkedList.prototype.printKthToLast = function(n, k) {
	if (n === null) {
		return 0;
	}

	var index = this.printKthToLast(n.next, k) + 1;
	
	if (index === k) {
		console.log(k + "th to last node is " + n.data);
	}
	
	return index;
};
