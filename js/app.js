'use strict';

let visitorName = prompt('What\'s your name?');
console.log('The user\'s name is ' + visitorName);
alert('Welcome to my About Me page, ' + visitorName + '! Learn more about me by playing this guessing game.');


let questionsArray = [
  'Yes or no: My cats are named after characters from Futurama.',
  'Yes or no: My favorite flower is lilacs.',
  'Yes or no: I currently live in Seattle. Did I grow up there?',
  'Yes or no: I broke my arm when I was 7.',
  'Yes or no: For my fifth grade science project, I lit our yard on fire and got in lots of trouble.'];
let correctAnswersArray = ['no', 'yes', 'no', 'no', 'no'];
let answersAlert = [
  'They\'re actually named after characters from Lord of the Rings',
  'Lilacs are my favorite',
  'I grew up in Colorado',
  'I didn\'t break any bones until I broke my arm at 27',
  'I did actually light our yard on fire, but I did it with professional adult supervision'
];
let totalScore = 0;

function guessingGame() {
  for (let i = 0; i < questionsArray.length; i++) {
    let response = prompt(questionsArray[i]).toLowerCase();
    if (response === correctAnswersArray[i]) {
      totalScore++;
      alert('Correct! ' + answersAlert[i] + '. You have ' + totalScore + ' points.');
    } else {
      alert('Incorrect. ' + answersAlert[i]);
    }
  }
}
guessingGame();

function guessNumber() {
  let attempts = 4;
  let maxNum = 10;
  alert('I\'m thinking of a number between 1 and ' + maxNum + '. Can you guess it in four tries?');
  let targetNum = (Math.floor(Math.random() * maxNum) + 1);
  console.log('the target number is ' + targetNum);
  for (let i = 0; i <= attempts; i++) {
    if (i === attempts) {
      alert('Sorry, you\'re out of guesses! I was thinking of the number ' + targetNum + '. Better luck next time!');
      break;
    }
    else {
      let guessNum = Number(prompt('What\'s your guess?'));
      if (guessNum === targetNum) {
        totalScore++;
        alert('Congrats, you got it in ' + (i + 1) + ' guesses! You have ' + totalScore + ' points.');
        console.log('Guess number ' + (i + 1) + ': ' + guessNum);
        break;
      }
      else if (guessNum < targetNum && i < (attempts - 1)) {
        alert('Too low! You have ' + ((attempts - 1) - i) + ' guesses left.');
        console.log('Guess number ' + (i + 1) + ': ' + guessNum);
      }
      else if (guessNum > targetNum && i < (attempts - 1)) {
        alert('Too high! You have ' + ((attempts - 1) - i) + ' guesses left.');
        console.log('Guess number ' + (i + 1) + ': ' + guessNum);
      }
    }
  }
}
guessNumber();


function favoriteShows() {
  const favShows = ['The Simpsons', 'Futurama', 'Bob\'s Burgers', 'Clone High'];
  for (let i = 0; i <= 6; i++) {
    let guessShow = prompt('What is one of my favorite animated shows?').toLowerCase();
    if (i === 6) {
      alert('Sorry, you\'re out of guesses! My favorite animated shows are ' + favShows[0] + ', ' + favShows[1] + ', ' + favShows[2] + ', and ' + favShows[3]);
      break;
    }
    else if ((guessShow === favShows[0].toLowerCase()) || (guessShow === favShows[1].toLowerCase()) || (guessShow === favShows[2].toLowerCase()) || (guessShow === favShows[3].toLowerCase())) {
      totalScore++;
      alert('Nice job! You got it in ' + (i + 1) + ' guesses. My favorite animated shows are ' + favShows[0] + ', ' + favShows[1] + ', ' + favShows[2] + ', and ' + favShows[3] + '. You have ' + totalScore + ' points.');
      break;
    }
    else {
      if (i !== 5) {
        alert('Not that one! You have ' + (5 - i) + ' guesses left.');
      }
      else {
        alert('Last chance!');
      }
    }
  }
}
favoriteShows();

alert('Thanks for playing, ' + visitorName + '! You got ' + totalScore + ' questions correct.');
