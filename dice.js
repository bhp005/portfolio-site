var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber + ".png"; // Change the image source to the dice image
var randomImageSource = "images/" + randomDiceImage; // Change the image source to the dice image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

function play() {
  window.location.reload();
}
if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

function refreshPage() {
  randomImageSource = "images/dice1.png";
  randomImageSource2 = "images/dice1.png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource2);
}
