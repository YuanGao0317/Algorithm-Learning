function checkIfStringIsPermutation(string) {
  var listOfCharacters = new Map();
  
  for (var i = 0; i < string.length; i++) {
    
    if (listOfCharacters.has(string.charAt(i))) {
      var numOfOccurances = listOfCharacters.get(string.charAt(i));
      listOfCharacters.set(string.charAt(i), ++numOfOccurances);
    } else {
      listOfCharacters.set(string.charAt(i), 1);
    }
  }
  
  var foundAnOdd = false;
  
  for (var [key, value] of listOfCharacters) {
    if (value % 2 !== 0) {
      if (!foundAnOdd) {
        foundAnOdd = true;
      } else {
        return false;
      }
    }
  }

  return true;
}
