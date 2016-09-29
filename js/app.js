solution = Math.floor((Math.random() * 100) + 1);

console.log(solution);

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	// reset
  	$('a.new').click(function(event){
  		event.preventDefault();
  		newGame();
  	});  	
  	
  });
	

$('input#guessButton').click(function(event){
	event.preventDefault(); 
	$('span#count').text(numberOfGuesses);
	var userNumber = document.getElementById('userGuess').value;
	var userGuess = parseInt(userNumber);
  		if(userGuess > solution) {
  			// userFeedback = 'Too High';
  			$('h2#feedback').text('Too High');
		} else if (userGuess < solution) {
			// userFeedback = 'Too Low';
			$('h2#feedback').text('Too Low');
		} else {
			// userFeedback = 'Correct! New Game?';
			$('h2#feedback').text('Correct!!! New Game?')
		};
	// user no. guessed list
	var noList = "<li class='guessBox'>"+userGuess+"</li>";
	$('ul#guessList').append(noList);
});
// var userFeedback = '';

// check user inputs





	// number of guesses
var x = 0;
var numberOfGuesses = function(){
	return x += 1;
	 }; 


  	// newGame
  	var newGame = function(){
  		userGuess = '';
  		solution = Math.floor((Math.random() * 100) + 1);
  		x = 0;
  		$('span#count').text('0');
  		$('h2#feedback').text('Make Your Guess!');
  		$('ul#guessList li').remove();

  	};

