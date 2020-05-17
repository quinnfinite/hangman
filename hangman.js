var hello = function () {
  console.log('hello');
}

var Hangman = function () {
  this._answer = this.generateAnswer();
  this._wrongGuessAllowed = 6;
  //1 for each body part;
  this._NumberOfWrongGuess = 0;
}

var options = [['Guess', 'This'],['Dog'],['Cat'],['Hack','Reactor'],['doormat'],['couch'],['git'],['Visual', 'Studio'],['Zoom']];

Hangman.prototype.generateAnswer = function () {
  //generate a random number between 0 and the number of options -1
  //*options.length

  var randomIndex = Math.ceil(Math.random()*options.length)
  return options[randomIndex]
}

Hangman.prototype.wrongGuessAllowed = function(answer){
  var count = 0;
  //for (var)
  return answer;
}