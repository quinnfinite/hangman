$('document').ready(function () {



  //INITIAL LOAD
  var game = new Hangman();
  var answer = game._answer;
  //upper cased answer for comparison
  answer = answer.map(function(word){
    return word.toUpperCase();
  })

  var $previousGuesses = game._guessedLetters;
  var $board = $('#board')
  var $body = $('body')
  //LOADING NEW GAME
  //new game
  var newGame = function () {
    game = new Hangman();
    answer = game._answer;
    answer = answer.map(function(word){
    return word.toUpperCase();
  })
    $previousGuesses = game._guessedLetters;
    loadBoard();
    loadPrev();
  }
  $('.new-game').on('click', function () {
    //reset what game is set to
    newGame();
    //reload the board
  })


  var $previousGuessContainer = $('#previous-guess-container');





//Input guesses
$('.guess-button').on('click', function(){
  //get the letter from the input
  var guess = $('#guess').val()
  //invoke the pass that input to the guessing function
  //the below function works when passed a letter
  game.guess(guess);
  $('#guess').val('')
  loadBoard();
  loadPrev();
  gameOver();
})

//load correctly guessed letters

//breaking at 1st letter - probem is with capital letters
var loadBoard = function () {
  //remove everything in board
  $board.empty()

  answer.forEach(function(word) {
    var chars = word.split('');
    //div for word
    var $word = $('<div class="word"></div>');
    $word.appendTo($board);
    chars.forEach(function(char) {
      var $letter = $('<div class="letter"></div>');
      var indexOf = $previousGuesses.indexOf(char);
      if(indexOf > -1){
        $letter.text(char);
      } else {
        $letter.text('__');
      }
      $letter.appendTo($word);

    });

  })


}

//appending Previous guesses
var loadPrev = function () {
//START
  //wipe the container

  $previousGuessContainer.empty();
  //reload it
  $('<h3>Guesses</h3>').appendTo($previousGuessContainer)
  $previousGuesses.forEach(function (letter) {
  var $prevGuess = $('<p></p>');
  $prevGuess.text(letter);

  $prevGuess.appendTo($previousGuessContainer);
  });

//END
}
//gameOver check

var gameOver = function () {

  if(game._won){
    alert('You won!');
  } else if (game._lost) {
    alert('You lost!');
  }

}


//LOAD THE BOARD
loadBoard();

});