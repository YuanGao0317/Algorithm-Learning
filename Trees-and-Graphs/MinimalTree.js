function Node(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

function makeBinaryTreeMinimalHeight(sortedArray, startIndex, endIndex) {
  if (startIndex > endIndex) return null;
  
  var midPoint = Math.floor((endIndex - startIndex) / 2 + startIndex);
  var currentNode = new Node(sortedArray[midPoint]);

  currentNode.left = makeBinaryTreeMinimalHeight(sortedArray, startIndex, midPoint - 1);
  currentNode.right = makeBinaryTreeMinimalHeight(sortedArray, midPoint + 1, endIndex);
  return currentNode;
}

var arr = [1, 4, 6, 9, 13, 16, 19, 20, 24, 27];
var bst = makeBinaryTreeMinimalHeight(arr, 0, arr.length - 1);
