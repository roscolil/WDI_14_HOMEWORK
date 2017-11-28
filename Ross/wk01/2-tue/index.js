// Grabbing input from user in the browser
var name = prompt('Please enter your name?');
console.log('Hello ' + name + '. ' + 'Nice to meet you');

// The vegan test
var foodChoice = prompt('On the menu tonight: Steak, fruit salad, tofurkey, pork chops. What would you like to eat?');

if (foodChoice === 'Steak' || foodChoice === 'pork chops') {
  console.log('Vegans beware!');
} else {
  console.log('This cuisine is vegan friendly');
}

// The Fortune Teller
var numberOfChildren = 1;
var partnersName = 'Tina';
var geographicLocation = 'Melbourne';
var jobTitle = 'Developer';

console.log('You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kid(s).');
