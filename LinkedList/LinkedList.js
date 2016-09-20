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


function addLists(n1, n2, carry) {
	if (n1 === null && n2 === null && carry === 0) return 0;
	var value = carry;
	if (n1 !== null) value += n1.data;
	if (n2 !== null) value += n2.data;
	
	var nNode = new Node(value % 10);
	if (n1 !== null || n2 !== null || value !== 0) {
		var next = addLists(n1 === null ? null : n1.next, n2 === null ? null : n2.next, value >= 10 ? 1 : 0);
		nNode.next = next;
	}
	return nNode;
};

function deleteMiddleNode(n) {
  if (n.next === null || n === null) throw new Error("list has one node or the node is null");
  
  n.value = n.next.value;
  n.next = n.next.next;
}


function partition(node, value) {
	var head = node;
	var tail = node;
	
	while (node !== null) {
		var next = node.next;
		if (node.data < x) {
			node.next = head;
			head = node;
		} else {
			tail.next = node;
			tail = node;
		}
		node = next;
	}
	// fix list tail
	tail.next = null;
	
	return head;
}



function addTogetherLinkedLists(list1, list2, carry) {
  if (list1 === null && list2 === null && carry === 0) {
    return null;
  }

  var resultNode = new Node(null);
  var value = carry;
  
  if (list1 !== null) {
    value += list1.value;
  }
  if (list2 !== null) {
    value += list2.value;
  }

  resultNode.value = value % 10;

  if (list1 !== null || list2 !== null) {
    var newNode = addTogetherLinkedLists(list1 !== null ? list1.next : null, list2 !== null ? list2.next : null, Math.floor(value / 10));
    resultNode.next = newNode;
  }

  return resultNode;
}

function isPalindromeList(head) {
  var node = head;
  var checkStack = [];
  while (node.next !== null) {
    var value = node.data;
    
    if (checkStack.includes(value)) {   //may cost extra time
      var i = checkStack.indexOf(value);  //may cost extra time
      checkStack.splice(i,1);
    } else {
      checkStack.push(value);
    }
    node = node.next;
  }
  
  if (head.data === node.data) {
    checkStack.splice(0,1);
  } else {
    checkStack.push(node.data);
  }
  
  return checkStack.length === 1 ? true : false;
}

function intersection(list1, list2) {
  var hash = {};
  var node = list1._length > list2._length ? list1.head : list2.head;
  do {
    if (hash[node.data] === 'undefine') {
      hash[node.data] = node.next;
    } else {
      if (hash[node.data] == node.next) {
        return true;
      }
    }
    node = node.next;
  } while (node.next === null);
  
  return false;
}

