function swap(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
	return arr;
}

module.exports = function(arr) {
	for (let key = 0; key < arr.length-1; key++) {
		
		if (arr[key+1] < arr[key]) {
			
			swap(arr, key, key+1);
			
			for (let i = key; i > 0; i--) {
				if (arr[i] < arr[i-1]) {
					swap(arr, i, i-1);
				} else {
					break;
				}
			}
		}
	}
}