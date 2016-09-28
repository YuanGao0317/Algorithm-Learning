var last_printed = null;
function checkBST(root){
	if (root === null) return true;
	
	if (!checkBST(n.left)) return false;
	
	if (last_printed !== null && n.data <= last_printed.data) {
		return false;
	}
	last_printed = n.data;
	
	if (!checkBST(n.right)) return false;
	
	return true;
}
