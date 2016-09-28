
function findTheSubTree(mainTreeNode, subTreeRoot) {
  if (mainTreeNode === null) {
    return false;

  } else if (mainTreeNode === subTreeRoot && checkTheSubTree(mainTreeNode, subTreeRoot)) {
    return true;
  }

  return findTheSubTree(mainTreeNode.left) || findTheSubTree(mainTreeNode.right);
}

function checkTheSubTree(mainTreeNode, subTreeNode) {
  if (mainTreeNode !== subTreeNode) {
    return false;
  }
  
  if (mainTreeNode === null && subTreeNode === null) {
    return true;
  
  } else if (mainTreeNode === null || subTreeNode === null) {
    return false;
  }
  return checkTheSubTree(mainTreeNode.left, subTreeNode.left) && checkTheSubTree(mainTreeNode.right, subTreeNode.right);
}
