function replaceSpace(str, trueLth) {
	str = str.split('');
	var count = 0;
	for (var i = 0; i < trueLth; i ++) {
		if (str[i] === ' ') {
			count ++;
		}
	}

	index = trueLth + count * 2;
	if (trueLth < str.length) {str[trueLth] = '\0'; }
	
	for (i = trueLth - 1; i >= 0; i --) {
		if (str[i] === " ") {
			str[index - 1] = "0";
			str[index - 2] = "2";
			str[index - 3] = "%";
			index = index - 3;
			
		} else {
			str[index - 1] = str[i];
			index --;
		}
	}
	
	return str.join('');
}
