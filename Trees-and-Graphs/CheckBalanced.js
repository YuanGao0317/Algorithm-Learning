
function getHeight(rootNode) {
  if (rootNode === null) {
    return -1;
  }

  return Math.max(getHeight(rootNode.left), getHeight(rootNode.right)) + 1;
}

function isBinaryTreeBalancedRecursive(rootNode) {
  if (rootNode === null) {
    return true;
  }

  var heightDiff = Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right));

  if (heightDiff > 1) {
    return false;
  } else {
    return isBinaryTreeBalancedRecursive(rootNode.left) && isBinaryTreeBalancedRecursive(rootNode.right);
  }  
}
