var numSquare = 6;

var colors = generateRandomColor(numSquare);

var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyGame = document.getElementById("easyBtn");
var hardGame = document.getElementById("hardBtn");

var pickedcolor = pickColor();
colorDisplay.textContent = pickedcolor;


// Easy Game
// generate 3 numbers colors
// Assign the generated colors to the square box and HIDE THE OTHER THREE
easyGame.addEventListener("click", function(){
    easyGame.classList.add("selected");
    hardGame.classList.remove("selected");
    numSquare = 3;
    colors = generateRandomColor(numSquare);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedColor;

    for( var i = 0; i < squares.length; i++){

        if(colors[i]){
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.background = "none";
        }
    }

});

hardGame.addEventListener("click", function() {
	hardGame.classList.add("selected");
	easyGame.classList.remove("selected");
    numSquare = 6;
    resetGame();
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
    
    // for(var i = 0; i < squares.length; i++) {
	// 	squares[i].style.background = colors[i];
	// 	squares[i].style.display = "block";
    // }
});

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){

        var clickedColor = this.style.background;

        if(clickedColor === pickedcolor){
            messageDisplay.textContent = "CORRECT!!";
            resetButton.textContent = "Play Again?";
            h1.style.background = this.style.background;
            changeColors(clickedColor);
        } else{
            messageDisplay.textContent = "TRY AGAIN!";
            this.style.background = "#232323";
        }
    });
}


resetButton.addEventListener("click", function(){
    resetGame();
});

function resetGame(){
    colors = generateRandomColor(numSquare);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    easyGame.classList.remove("selected");
    hardGame.classList.remove("selected");
    resetButton.textContent = "New Game";

    for(i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    messageDisplay.textContent = "";
    h1.style.background = "steelblue";
}

function changeColors(color){
    for(i = 0; i < colors.length; i++){
        squares[i].style.background = pickedcolor;
    }
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColor(num){
    //Make an array
    var arr = [];
    // get random color and push to the array
    for(i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

// function reset(){
//     var colors = generateRandomColor(6);
//     var pickedcolor = pickColor();

//     for(i = 0; i < squares.length; i++){
//         squares[i].style.background = colors[i];
    
//         squares[i].addEventListener("click", function(){
//             if(this.style.background === pickedcolor){
//                 messageDisplay.textContent = "CORRECT!!";
//                 h1.style.background = this.style.background;
//                 changeColors();
//             } else{
//                 messageDisplay.textContent = "TRY AGAIN!";
//                 this.style.background = "#232323";
//             }
//         });
//     }

// }

// resetButton.addEventListener("click", function(){
//     generateRandomColor(6);
//     pickColor();
// })