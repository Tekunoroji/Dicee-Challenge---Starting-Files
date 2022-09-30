//player declaration

var player1 = prompt("Name player 1");
var player2 = prompt("Name player 2");

//Change html players

document.querySelector("p").innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;

//Button functionality

var btn = document.getElementById("clickMe");
btn.addEventListener("click", diceRoll);




//Dice roll function with declaring winner or draw and changing image


function diceRoll() {
    var randomNumber1 = Math.floor(Math.random()*6 +1);
    var randomNumber2 = Math.floor(Math.random()*6 +1);
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
 if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = player2 + " won";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1 + " won";
} else {
    document.querySelector("h1").innerHTML = "DRAW";
}
}

