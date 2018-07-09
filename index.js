var inquirer = require("inquirer");

var isLetter = require("is-letter");

var Word = require("./Word.js");

var prompt = require("prompt");



console.log("Time for Some CONSTRUCTOR HANGMAN!");
console.log("Guess the letter of the name of a Musical Instrument");
console.log("Have Fun!");
console.log("-----------------------------------");
prompt.start();

// Create a variable for word bank
var hangmanWords = ['Guitar', 'Drums', 'Piano', 'Trumpet', 'Violin', 'Cello', 'Synthesizer', 'Harmonica', 'Tuba', 'Standup Bass', 'Saxophone',
                    'Triangle', 'Cow Bell', 'Drum Machine', 'Oboe', 'Flute', 'Harp', 'Vibraphone', 'Viola', 'Taiko Drum', 'Mandolin']

// create a function that will choose words randomly from the word bank and gets the game ready to start play
var StartGame = function() {
this.hangmanWord = hangmanWords,
this.display = 0,
this.guessesLeft = 12,
this.startWord = null,
this.guessedLetter = [],

this.newGame = function() {
    if(this.guessesleft === 12) {
        console.log("And let's Begin!");
        
        var newWord = Math.floor(Math.random);
        for (var i = 0; i < hangmanwords.length; i++) {
            this.wordSelect = new hangmanWord(this.hangmanWords);

        } 
        
    } else {
        this.newGame();
        }
    }, 
    this.userPrompt = function() {
        inquirer.prompt([{
            name: "letterSelected",
            type: "input",
            message: "?Guess A Letter?:",
            
           validGuess: function(value) {
               if(type(value)) {
                return true;
               } else {
                   return false
               }
           }

        }]) .then(function(letr) {
            var returnLetter = (letr.letterSelected).toUpperCase();
            var letterGuess = false;
            for(var i = 0; i < letterGuess.length; i++) {
                if([i] === letterGuess) {
                    return true;
                } 
            } if (letterGuess === false) {
                that.guessedLetter.push(returnLetter);

                var letterCorrect = that.wordSelect.checkIfLetterFound(returnLetter);

                if (letterCorrect === 0) {
                    console.log("Wrong! Try Again!");
                    that.guessesLeft--;
                    that.disply++;
                    console.log("Guesses Left: " + guessesLeft);
                    console.log('\n***********************');
                    console.log(that.newWord.returnLetter());
                    console.log('\n***********************');
                    console.log("Letters Guessed: " + that.guessedLetter);
                } else {
                    console.log("Correct!");

                    if (that.newWord.foundTheWord() === true) {
                        console.log(that.newWord.returnLetter());
                        console.log("You won!  You are the Greatest Word Guesser of All Time!");
                    } else {
                        console.log("Guesses Left: " + guessesLeft);
                        console.log(that.newWord.returnLetter());
                        console.log('\n***********************');
                        console.log("Letters Guessed: " + that.guessedLetter);
                    }
                } if (that.guessesLeft > 0 && that.newWord.wordFound === false) {
                    that.userPrompt();
               } else if(that.guessesLeft === 0) {
                    console.log("Game Over!");
                    console.log("The Word You Were Trying To Guess Was: " + that.newWord);
               } else {
                   console.log("Try Again My Friend!");
                   that.userPrompt();
               }
            } 
        });
    }

};

StartGame();




/* Create a constructor function that will display "?Guess a Letter?"
    That also has an entry field for guesses*/

//Create a constructor function that alerts user if letter is correct or wrong


//Create a constructor function that will give an amount of guesses to user

//Create a constructor function that will display the number of guesses left before game ends

// Create a constructor function that will give user points if word is guessed correctly

//  Create a prompt that tells user they've had too many guesses and game is over.


/* Randomely selects a word and uses the Word constructor to store 
   it. */


/* Prompts the user for each guess and keeps trak of the user's 
    remaining guesses. */

    