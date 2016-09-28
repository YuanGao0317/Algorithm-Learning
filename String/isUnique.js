
function isStringUniqueCharacters(string) {
  // Ask if string is ASCII or Unicode -- ASCII is limited to 128 chars
  var asciiChars = 128;
  
  if (string.length > asciiChars) {
  	return false;
  }

  var characterArray = new Int8Array(128);
  for (var i = 1; i <= asciiChars; i++) {
  	characterArray[i] = 0;
  }

  for (var j = 0; j < string.length; j++) {
  	characterArray[string.charCodeAt(j)]++;
  	if (characterArray[string.charCodeAt(j)] > 1) {
  		return false;
  	}
  }
  return true;
}
