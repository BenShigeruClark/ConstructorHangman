/* Create a Word constructor which depends on the letter constructor
   This should create an object representing the current word the user 
   is attempting to guess. */
var Letter = require('./Letter.js');
   // This constructor should define
function Word(wordChoice) {
    this.myWord = wordChoice;
    this.letterArray = [];
    this.guess = false;

     /* An array of new Letter objects representing the letters
      of the underlying word. */
    this.ifLetter = function() {
        for (var i = 0; i < this.word.length; i++) {
            var letterChoice = new Letter(this.myWord[i]);
            this.letterArray.push(letterChoice);

        }
    }
};


  /*  Define a function that takes a character as a argument and calls 
      the guess function on each letter object (2nd function defined
      in Letter.js) */

      this.ifWord = function() {
        if (this.letterArray.every(function(letr) {
                return letr.appear === true;
        })) {
            this.guess === true;
            return true;
        }
      };

 /* Define a function that returns a string representing the  
      word.  This should call the function on each letter object
      (function defined in Letter.js) that displays the character
      or an underscore that concatenates those together. */

      this.letterTrue = function(letterGuess) {
            var returnValue = 0;

            this.letterArray.forEach(function(letr) {
                if (letr.letterTrue === letterGuess) {
                    letr.appear === true;
                    returnValue++;
                }
            })
            return returnValue;
      };

      this.wordTrue = function() {
          var blankLetter = "_";
          that.letterArray.forEach(function(letr) {
            var fillInLetter = letr.letterRender();
            blankLetter += fillInLetter;
          });
          return blankLetter;
      };

      module.exports = Word;

   