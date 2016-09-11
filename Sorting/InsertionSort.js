var InsertionSort = function(a, from, to) {
	for (var i = from + 1; i < to; i++) {
		var element = a[i];
		
		for (var j = i - 1; j >= from; j--) {
			var tmp = a[j];
			if (element < tmp) {
				a[j + 1] = tmp;
			} else {
				break;
			}
		}
		
		a[j + 1] = element;
	}
};
