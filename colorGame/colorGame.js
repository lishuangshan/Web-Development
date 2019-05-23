var numSquares = 6;
var colors = [];
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButtons();
	setUpSquares();	
	reset();

}

function setUpModeButtons() {
		//mode. buttons eventlistener
	for(var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares() {
		for(var i = 0; i < squares.length; i++) {

			//add click listener to squares
			squares[i].addEventListener("click", function() {

				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;

				//compare color to pickedColor
				if(clickedColor === pickedColor) {
					changeColors(clickedColor);
					resetButton.textContent = "Play Again?";
					messageDisplay.textContent = "Correct!";
					h1.style.backgroundColor = clickedColor;
				}else {
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}	
		});

	}
}

	


// easyBtn.addEventListener("click", function() {
	
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	messageDisplay.textContent = "";
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	messageDisplay.textContent = "";
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
	
// 	}

// });

function reset() {
	//Reset the text
	resetButton.textContent = "New Colors";
	//make the alert disappear
	messageDisplay.textContent = "";
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	

	//change the background color to original
	h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function() {
	reset();

});


function changeColors(color) {
	//loop through each color to match given color
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
	}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random color amd push into array
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "bluw" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	//return a rgb string
	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}



