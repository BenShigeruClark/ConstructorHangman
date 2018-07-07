// Variable for require inquirer and prompt
var inquirer = require("inquirer");

// Create the constructor Letter function
var Letter = function(letter) {
    this.character = letter;
    this.letterState = false;
    this.letterGuess = function(){
        if (this.letterStat) {
            console.log(this.character);
        } else {
            return "-"
        }
    }
};

module.exports = Letter;
/* Define a string value to store the underlying character 
   for the letter */


/* Define a boolean value that stores whether that letter has 
   been guessed yet*/

/* Define a function that returns the underlying character if the 
   letter has been guessed, or a placeholder (underscore if 
   the letter has not been guessed*/

/* Define a function that takes a character as an argument and 
   checks it against the underlying character, updating the stored
   boolean value to true if it was guessed correctly.*/


