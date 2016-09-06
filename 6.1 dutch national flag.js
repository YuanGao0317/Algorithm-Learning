function  dutch_flag_partition(array, pivotIndex) {
	var pivot = array[pivotIndex];
	var small = 0;
	var equal = 0;
	var large = array.length - 1;
	
	while (equal <= large) {
		if (array[equal] < pivot) {
			array[equal] = [array[small], array[small] = array[equal]][0];
			++ equal;
			++ small;
		} else if (array[equal] == pivot) {
			++ equal;
		} else { // array[equal] > pivot
			array[equal] = [array[large], array[large] = array[equal]][0];
			-- large;
		}
	}

	return array;
}
