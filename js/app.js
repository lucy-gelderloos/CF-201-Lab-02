'use strict';

function sayHi() {
  let visitorName = prompt('What\'s your name?').toLowerCase();
  console.log('The user\'s name is ' + visitorName);
  alert('Nice to see you, ' + visitorName + '!');
}


function guessingGame() {
  const playGame = () => {
    let cats = confirm('My cats are named after characters from Futurama.');
    if(cats === false) {
      console.log('Correct');
      alert('Correct! They\'re named after characters from Lord of the Rings.');
    } else {
      console.log('Incorrect');
      alert('Nope! They\'re actually named after characters from Lord of the Rings');
    }

    let flower = confirm('My favorite flower is lilacs.');
    if(flower === true){
      console.log('Correct');
      alert('Correct!')
    } else {
      console.log('Incorrect');
      alert('Incorrect - lilacs are my favorite.');
    }

  };
  gameButton.addEventListener('click',playGame);
}
