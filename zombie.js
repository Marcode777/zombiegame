var prompt = require('prompt');
var player;
var playerHealth = 100;
var playerDealtDamage;
var zombie;
var zombieHealth = 20;
var zombieDealtDamage;


prompt.start();

prompt.get(['username'], function(err, result) {
  if(err) {
    throw err;
  }
  player = result.username
  console.log("You are " + result.username);
});






// Game asks for character name
// User enter character name
// user defined characteristics: health = 100, deal damage: 2-5 random
// zombie defined characteristics: health = 20, deal damage: 2-5 random
// 1 zombie appears per day
// day 1 starts 
// each day user has to guess a number from 1 - 10
// If the number is correctly guessed, the user attacks a zombie
// If the number is incorrectly guessed, the zombie attacks a user
// user dies 
  // if you get to 0 health
  // zombie dies

// if you get to 0 health
// ????11. Everyone do (if left over time)????