//creat secret number
var secretNumber = 4;


//ask users for guess
var guess = prompt("Guess a number");

//check guess
if (Number(guess) === secretNumber) {     
	alert("Right");
}
else if (Number(guess) > secretNumber) {
	alert("high!");
}
else {
	alert("low!");
}


// Number() change a string into a number! 