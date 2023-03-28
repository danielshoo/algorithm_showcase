module.export = function selectionSort(arr) {
	
	let newArr = [...arr];
	
	let i = 0;
	let j = 1;
	
	while (i < newArr.length) {
		
		if (newArr[j] < newArr[i]) {
			let tmp = newArr[i];
			newArr[i] = newArr[j];
			newArr[j] = tmp;
		}
		
		if (j + 1 > newArr.length) {
			i++;
			j = i + 1;
			continue;
		}
		
		j++;
	}
	
	return newArr;
}

function getMidpoint(start, end) {
	return Math.floor(start + (end - start)/2);
}