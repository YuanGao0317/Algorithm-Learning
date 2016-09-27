function createLevelLinkedList(treeRoot, lists, level) {
	if (root === null) return;
	
	var list = null;
	if (lists.length() == level) {
		list = new LinkedList();
		lists.add(list);
	} else {
		list = lists[level];
	}
	// pre-order
	list.add(treeRoot);
	createLevelLinkedList(treeRoot.left, lists, level+1);
	createLevelLinkedList(treeRoot.right, lists, level+1);
}
