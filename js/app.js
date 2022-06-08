'use strict';

let visitorName = prompt('What\'s your name?');

// eslint-disable-next-line no-unused-vars
function sayHi() {
  console.log('The user\'s name is ' + visitorName);
  alert('Nice to see you, ' + visitorName + '! Let\'s play a quick guessing game.');
}

// eslint-disable-next-line no-unused-vars
function guessingGame() {

  let cats = prompt('My cats are named after characters from Futurama.').toLowerCase();
  /*  while(cats !== 'no' && cats !== 'yes') {
    let cats = prompt('Please answer yes or no');
  }*/
  if(cats === 'no') {
    //    console.log('Question 1 correct');
    alert('Correct! They\'re named after characters from Lord of the Rings.');
  } else {
    //    console.log('Question 1 incorrect');
    alert('Nope! They\'re actually named after characters from Lord of the Rings');
  }

  let flower = prompt('My favorite flower is lilacs.').toLowerCase();
  if(flower === 'yes'){
    //    console.log('Question 2 correct');
    alert('Correct!');
  } else {
    //    console.log('Question 2 incorrect');
    alert('Incorrect - lilacs are my favorite.');
  }

  let bornIn = prompt('I currently live in Seattle. Did I grow up there?').toLowerCase();
  if(bornIn === 'no'){//
    //    console.log('Question 3 correct');
    alert('Correct! I grew up in Colorado.');
  } else {
    //    console.log('Question 3 incorrect');
    alert('Incorrect - I grew up in Colorado.');
  }

  let owMyBones = prompt('I broke my arm when I was 7.').toLowerCase();
  if(owMyBones === 'no'){
    //    console.log('Question 4 correct');
    alert('Correct! I never broke any bones until I broke my arm when I was 27.');
  } else {
    //    console.log('Question 4 incorrect');
    alert('Incorrect. I never broke any bones until I broke my arm when I was 27.');
  }

  let fireScience = prompt('For my fifth grade science project, I lit our yard on fire and got in lots of trouble.').toLowerCase();
  if(fireScience === 'no'){
    //    console.log('Question 5 correct');
    alert('Correct! I did light our yard on fire for science, but it was under trained adult supervision.');
  } else {
    //    console.log('Question 5 incorrect');
    alert('Incorrect! I did light our yard on fire for science, but it was under trained adult supervision.');
  }

  alert('Thanks for playing, ' + visitorName + '!');
}
