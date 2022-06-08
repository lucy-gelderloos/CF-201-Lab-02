'use strict';

let visitorName = prompt('What\'s your name?');

function sayHi() {
  console.log('The user\'s name is ' + visitorName);
  alert('Nice to see you, ' + visitorName + '! Let\'s play a quick guessing game.');
}

function guessingGame() {

  let cats = prompt('My cats are named after characters from Futurama.').toLowerCase();
  /*  while(cats !== 'no' && cats !== 'yes') {
    let cats = prompt('Please answer yes or no');
  }*/
  if(cats === 'no') {
    console.log('Question 1 correct');
    alert('Correct! They\'re named after characters from Lord of the Rings.');
  } else {
    console.log('Question 1 incorrect');
    alert('Nope! They\'re actually named after characters from Lord of the Rings');
  }

  let flower = prompt('My favorite flower is lilacs.').toLowerCase();
  if(flower === 'yes'){
    console.log('Question 2 correct');
    alert('Correct!');
  } else {
    console.log('Question 2 incorrect');
    alert('Incorrect - lilacs are my favorite.');
  }

  let bornIn = prompt('I currently live in Seattle. Did I grow up there?').toLowerCase();
  if(bornIn === 'no'){
    console.log('Question 2 correct');
    alert('Correct!');
  } else {
    console.log('Question 2 incorrect');
    alert('Incorrect - I grew up in Colorado.');
  }

  alert('Thanks for playing, ' + visitorName + '!');
}
