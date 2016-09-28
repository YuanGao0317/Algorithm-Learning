function compressStringByCharacter(string) {
	var arrayOfChars = [];
	var charCount = 0;

	for (var i = 0; i < string.length; i++) {
		charCount++;

		if (string.charAt(i) !== string.charAt(i + 1) || i === string.length - 1) {
			arrayOfChars.push(string.charAt(i));
			arrayOfChars.push(charCount);
			charCount = 0;
		}
	}
	return arrayOfChars.length < string.length ? arrayOfChars.join("") : string;
}
