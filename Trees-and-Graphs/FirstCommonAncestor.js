
function findFirstCommonAncestor(node1, node2) {
  var delta = depth(node1) - depth(node2);
  var shallower = delta > 0 ? node2 : node1;
  var deeper = delta < 0 ? node1 : node2;
  deeper = goUpNodes(deeper, Math.abs(delta));

  while (shallower !== deeper && shallower !== null && deeper !== null) {
    shallower = shallower.parent;
    deeper = deeper.parent;
  }

  if (!shallower || !deeper) {
    throw new Error("No connection between nodes");
  } else {
    return shallower;
  }
}

// Finds how far down in tree node is
function depth(node) {
  
  var height = 0;
  var currentNode = node;
  
  while (currentNode) {
    currentNode = currentNode.parent;
    height++;
  }
  return height;
}
// Moves node up n levels in tree
function goUpNodes(node, num) {

  var currentNode = node;
  var count = num;
  
  while (count > 0) {
    currentNode = currentNode.parent;
    count--;
  }
  return currentNode;
}
