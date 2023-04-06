module.exports = function mergeSort(array) {
	
	
	function _merge(indexLeft, indexMid, indexRight) {
		
		let arrayCache = {};
		
		let h = indexLeft;
		let i = indexLeft;
		let j = indexMid + 1;
		
		
		while(h <= indexRight) {
			
			if (!arrayCache.hasOwnProperty(i)) arrayCache[i] =  array[i];
			if (!arrayCache.hasOwnProperty(i + 1)) arrayCache[i + 1] =  array[i + 1];
			if (!arrayCache.hasOwnProperty(j)) arrayCache[j] =  array[j];
			if (!arrayCache.hasOwnProperty(j + 1)) arrayCache[j + 1] =  array[j +1];
			
			if (i <= indexMid && j <= indexRight) {
				if (arrayCache[i] <= arrayCache[j]) {
					array[h] = arrayCache[i];
					i++;
				} else {
					array[h] = arrayCache[j];
					j++;
				}
			} else if (i <= indexMid) {
				array[h] = arrayCache[i];
				i++;
			} else if (j <= indexRight) {
				array[h] = arrayCache[j];
				j++;
			}
			
			h++;
			
		}
	}
	
	function _mergeSort(indexLeft, indexRight) {
		
		if (indexLeft >= indexRight) return;
		
		let indexMid = Math.floor(indexLeft + (indexRight - indexLeft)/2);
		
		_mergeSort(indexLeft, indexMid);
		_mergeSort(indexMid + 1, indexRight);
		_merge(indexLeft, indexMid, indexRight);
	}
	
	let indexLeft = 0;
	let indexRight = array.length - 1;
	
	_mergeSort(indexLeft, indexRight);
	
	return array;
}