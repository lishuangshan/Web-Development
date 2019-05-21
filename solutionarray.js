function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log("*****");
		console.log(arr[i]);
		console.log("*****");
	}
}

function isUniform(arr) {
	var firstElement = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== firstElement) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(element) {
		sum+=element;
	});
	return sum;
}

function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}

	}
	return max;
}

