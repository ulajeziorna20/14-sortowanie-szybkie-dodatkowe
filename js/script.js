function quickSort(array) {
	if (array.length <= 1) { 
		return array;
	} else {

		let left = [];
		let right = [];
		let newArray = [];
		let pivot = array.pop();
		let length = array.length;

		for (let i = 0; i < length; i++) {
			if (array[i] <= pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

let arrayToSort = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + arrayToSort);

let sortedArray = quickSort(arrayToSort);

console.log("Sorted array: " + sortedArray);









// algorytm dziel i zwyciężaj


