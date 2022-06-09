'use strict';

let visitorName = prompt('What\'s your name?');
console.log('The user\'s name is ' + visitorName);
alert('Welcome to my About Me page, ' + visitorName + '! Learn more about me by playing this guessing game.');

let rightAnswers = ['no', 'yes', 'no', 'no', 'no'];
let questionsArray = ['My cats are named after characters from Futurama.', 'My favorite flower is lilacs.', 'I currently live in Seattle. Did I grow up there?', 'I broke my arm when I was 7.', 'For my fifth grade science project, I lit our yard on fire and got in lots of trouble.'];
let incorrectAnswersArray = ['yes', 'no', 'yes', 'yes', 'yes'];
let totalScore = 0

function CorrectAnswers() {
  //Single-answer questions
  for (let i = 0; i < questionsArray.length; i++) {
    let response = prompt(questionsArray[i]);
    if (response === rightAnswers[i]) {
      //    console.log('Question 1 correct');
      if (response === rightAnswers[i]) {
        totalScore++;
        alert('that is correct you have ' + totalScore + ' correct answer');
      }
      //alert('Correct! They\'re named after characters from Lord of the Rings.');
    } else {
      //    console.log('Question 1 incorrect');
      // rightAnswers.push(0);
      alert('Nope! that is wrong');
    }
  }
}

CorrectAnswers();



// console.log(rightAnswers);

// let flower = prompt().toLowerCase();
// if(flower === 'yes'){
//   //    console.log('Question 2 correct');
//   alert('Correct!');
//   rightAnswers.push(1);
// } else {
//   //    console.log('Question 2 incorrect');
//   alert('Incorrect - lilacs are my favorite.');
//   rightAnswers.push(0);
// }

// let bornIn = prompt().toLowerCase();
// if(bornIn === 'no'){//
//   //    console.log('Question 3 correct');
//   alert('Correct! I grew up in Colorado.');
//   rightAnswers.push(1);
// } else {
//   //    console.log('Question 3 incorrect');
//   alert('Incorrect - I grew up in Colorado.');
//   rightAnswers.push(0);
// }

// let owMyBones = prompt().toLowerCase();
// if(owMyBones === 'no'){
//   //    console.log('Question 4 correct');
//   alert('Correct! I never broke any bones until I broke my arm when I was 27.');
//   rightAnswers.push(1);
// } else {
//   //    console.log('Question 4 incorrect');
//   alert('Incorrect. I never broke any bones until I broke my arm when I was 27.');
//   rightAnswers.push(0);
// }

// let fireScience = prompt().toLowerCase();
// if(fireScience === 'no'){
//   //    console.log('Question 5 correct');
//   alert('Correct! I did light our yard on fire for science, but it was under trained adult supervision.');
//   rightAnswers.push(1);
// } else {
//   //    console.log('Question 5 incorrect');
//   alert('Incorrect! I did light our yard on fire for science, but it was under trained adult supervision.');
//   rightAnswers.push(0);
// }

// //Guess a random number
function guessNumber() {


  let maxNum = 10;
  alert('I\'m thinking of a number between 1 and ' + maxNum + '. Can you guess it in four tries?');
  let targetNum = (Math.floor(Math.random() * maxNum) + 1);
  console.log('the target number is ' + targetNum);
  for (let i = 0; i <= 4; i++) {
    if (i === 4) {
      alert('Sorry, you\'re out of guesses! I was thinking of the number ' + targetNum + '. Better luck next time!');
      
      break;
    }
    else {
      let guessNum = Number(prompt('What\'s your guess?'));
      /*    I want to use the below "while" loop to catch any guesses that aren't numbers or are outside the specified range. This does that, but I'd prefer if it didn't use up one of the four guesses - i.e., I don't want i to increment unless the user has entered a guess that is a number within the specified range.
        while(isNaN(guessNum) || 1 > guessNum || maxNum < guessNum){
        let guessNum = prompt('Please enter a number between 1 and ' + maxNum);
        console.log('Guess number ' + (i + 1) + ': ' + guessNum);
        break;
      }*/
      if (guessNum === targetNum) {
        alert('Congrats, you got it in ' + (i + 1) + ' guesses!');
        console.log('Guess number ' + (i + 1) + ': ' + guessNum);
        if (guessNum === targetNum) {
          totalScore++;
          alert('that is correct you have ' + totalScore + ' correct answer');
        }
        break;
      }
      else if (guessNum < targetNum && i < 3) {
        alert('Too low! You have ' + (3 - i) + ' guesses left.');
        console.log('Guess number ' + (i + 1) + ': ' + guessNum);
      }
      else if (guessNum > targetNum && i < 3) {
        alert('Too high! You have ' + (3 - i) + ' guesses left.');
        console.log('Guess number ' + (i + 1) + ': ' + guessNum);
      }
    }
  }
}
guessNumber();

// //Multiple-answer question
function favoriteShows() {
  const favShows = ['The Simpsons', 'Futurama', 'Bob\'s Burgers', 'Clone High'];
  for (let i = 0; i <= 6; i++) {
    let guessShow = prompt('What is one of my favorite animated shows?').toLowerCase();
    if (i === 6) {
      alert('Sorry, you\'re out of guesses! My favorite animated shows are ' + favShows[0] + ', ' + favShows[1] + ', ' + favShows[2] + ', and ' + favShows[3]);
      
      break;
    }
    else if ((guessShow === favShows[0].toLowerCase()) || (guessShow === favShows[1].toLowerCase()) || (guessShow === favShows[2].toLowerCase()) || (guessShow === favShows[3].toLowerCase())) {
      //let start = favShows.indexOf(guessShow);
      //let otherShows = favShows.splice(start, 1);
      alert('Nice job! You got it in ' + (i + 1) + ' guesses. My favorite animated shows are ' + favShows[0] + ', ' + favShows[1] + ', ' + favShows[2] + ', and ' + favShows[3]);
      if ((guessShow === favShows[0].toLowerCase()) || (guessShow === favShows[1].toLowerCase()) || (guessShow === favShows[2].toLowerCase()) || (guessShow === favShows[3].toLowerCase())) {
        totalScore++;
        alert('that is correct you have ' + totalScore + ' correct answer');
      }
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


// console.log('The user\'s total score is ' + totalScore);

// alert('Thanks for playing, ' + visitorName + '! You got ' + totalScore + ' questions correct.');
