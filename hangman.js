var Hangman = function () {
  this._answer = this.generateAnswer();
  //number of right guesses to win
  this._guessesToWin = this.guessesToWin();
  //number of right guess
  this._correctGuesses = 0;
  //log of all guesses
  this._guessedLetters = [];
  //Game Over
  this._gameOver = false;
  //1 for each body part;
  this._wrongGuessAllowed = 6;
  this._numberOfWrongGuesses = 0;
}

var options = [['Guess', 'This'],['Dog'],['Cat'],['Hack','Reactor'],['doormat'],['couch'],['git'],['Visual', 'Studio'],['Zoom']];

Hangman.prototype.generateAnswer = function () {

  var randomIndex = Math.ceil(Math.random()*options.length-1)

  return options[randomIndex]

}

Hangman.prototype.guessesToWin = function() {
  var count = 0;
  for (var word = 0; word < this._answer.length; word++) {
    for (var char = 0; char < this._answer[word].length; char++) {
      count++;
    }
  }
  return count;
}

Hangman.prototype.guess = function(letter){
  if(!this._gameOver && !this.previousGuess(letter)) {
    //log the guess
    this._guessedLetters.push(letter);

    var correctGuess = false;
    var indices =[];
    //iterate through the answer array
      //iterate through each string
      //if the letter is found
        //set correctGuess to true
        //return the index
    var answer = this._answer.map(function(word) {
      return word.toLowerCase();
    })
    var letter = letter.toLowerCase();
    for (var word = 0; word < answer.length; word++) {
      for(var char = 0; char < answer[word].length; char++) {
        if(answer[word][char] === letter) {
          correctGuess = true;
          this._correctGuesses++;
          indices.push([word,char]);

        }
      }
    }

    //if correctGuess is false
      //increment wrong guess
    if (!correctGuess) {
      console.log('wrong guess');
      this._numberOfWrongGuesses++;
    }
    this.gameOver();
    return indices;

  }
}

Hangman.prototype.previousGuess = function (letter) {
  var guess = letter.toLowerCase();
  console.log(this._guessedLetters.indexOf(guess));
  if (this._guessedLetters.indexOf(guess) >= 0) {
    console.log('you guessed that already!')
    return true;
  } else {
    console.log('You haven\'t guessed that before')
    return false;
  }
}

Hangman.prototype.gameOver =  function() {
  if(this._correctGuesses === this._guessesToWin) {
    this._gameOver = true;
    console.log('You win!');
    return 'You win!';
  } else if (this._numberOfWrongGuesses >= this._wrongGuessAllowed) {
    this._gameOver = true;
    console.log('Game Over!');
    return 'Game Over!';
  } else {
    console.log('Continue');
    return 'Continue';
  }
}