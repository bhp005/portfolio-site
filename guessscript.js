/**
 * Guess The Number Game
 * done: Get user value from input and save it to variable numberGuess
 * done: Generate a random number 1 to 100 and save it to variable correctNumber
 * done: Console whether the guess is too high, too low, or is correct inside playGame function
 * done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * done: Complete the showYouWon, showNumberAbove, showNumberBelow
 * done: Use the showYouWon... functions within displayResult to display the correct dialog
 * done: Save the guess history in a variable called guess
 * done: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 

let correctNumber = getRandomNumber();
//console.log(correctNumber);
let guesses = [];

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
   
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
// *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
      /*if (numberGuess > correctNumber){
      console.log ("too high");
    } else if (numberGuess < correctNumber){
      console.log ("your number is too low");
    } else  { (numberGuess == correctNumber) 
      console.log ("is correct");
    }*/
  }





/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult (numberGuess){

if (numberGuess > correctNumber){
  showNumberAbove();
} else if (numberGuess < correctNumber){
  showNumberBelow ();
} else  { (numberGuess == correctNumber) 
  showYouWon();
}
}




/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  // reset the correct number
  // reset result display 
  // reset the guesses the array
  //reset the guess histroy disply
  //document.getElementById('restart-game').reset();
  correctNumber = getRandomNumber()
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();

}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = reset();


}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){

   // *CODE GOES BELOW HERE *

   let randomNumber = Math.random();
   let wholeNumber = Math.floor(randomNumber * 100) + 1;
   return wholeNumber;
   console.log(randomNumber);
   console.log(wholeNumber);
   
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
*/

function saveGuessHistory(guess) {
 guesses.push(guess);
 console.log(guesses);

 
 
  /* emptyArray.push(numberGuess);
  let emptyArray = guesses();
  console.log(guesses);
*/
}
  

  // *CODE GOES BELOW HERE *


/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index >= 0){
    list += "<li class='list-group-item>" + "You Guessued " + guesses[index] + "</li>";
    index-=1;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
    //var display = document.getElementById(list);
 // guesses.push(string(numberguess) + String());
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
  
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *

  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}