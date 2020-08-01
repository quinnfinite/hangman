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
    loadHangman();
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
  loadHangman();
  gameOver();
})

var loadHangman = function () {
  var photo;

  if (game._won === true) {
    photo = 'assets/thank-you.png';
  } else if (game._numberOfWrongGuesses === 0) {
    photo = 'assets/BlankNoose.png';
  } else if (game._numberOfWrongGuesses === 1) {
    photo = 'assets/head.png';
  } else if (game._numberOfWrongGuesses === 2) {
    photo = 'assets/Body.png';
  } else if (game._numberOfWrongGuesses === 3) {
    photo = 'assets/one-arm.png';
  } else if (game._numberOfWrongGuesses === 4) {
    photo = 'assets/arms.png';
  } else if (game._numberOfWrongGuesses === 5) {
    photo = 'assets/one-leg.png';
  } else {
    photo = 'assets/dead.png';
  }

  $('.hangman').attr('src', photo);
}

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
  $('<h1>Guesses</h1>').appendTo($previousGuessContainer)
  $previousGuesses.forEach(function (letter) {
  var $prevGuess = $('<p class-"previous-guess"></p>');
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