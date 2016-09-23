// you can only use an additional temporary stack, but you may not copy the elements into any other data structure, such as array
function sortUnsortedStack(unsortedStack) {
  
  var orderedStack = new Stack();
  while (unsortedStack.values.length > 0) {
    var nextValue = unsortedStack.pop();
    while (!orderedStack.isEmpty() && nextValue < orderedStack.peek()) {
      unsortedStack.push(orderedStack.pop());
    }
    orderedStack.push(nextValue);
  }
  return orderedStack;
}
