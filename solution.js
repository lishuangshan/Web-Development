function isEven(num)
{
	//the zen of return
	return num % 2 === 0;
}

// use recursion : leap of faith!!
function factorial(num) {
	if (num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
}