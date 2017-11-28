// Grabbing input from user in the browser
var name = prompt('Please enter your name?');
console.log('Hello ' + name + '. ' + 'Nice to meet you');

// The vegan test
var foodChoice = prompt('On the menu tonight: Steak, fruit salad, tofurkey, pork chops. What would you like to eat?');
var foodChoiceLwr = foodChoice.toLowerCase();

if (foodChoice === 'steak' || foodChoice === 'pork chops') {
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

// The Age Calculator
var getYear = new Date();
var currentYear = getYear.getFullYear();
var birthYear = prompt('What is the year of your birth?');

var Age1 = currentYear - birthYear;
var possibleAge = Age1 - 1;

console.log('They are either ' + possibleAge + ' or ' + Age1 + ' years old.');

// The Lifetime Supply Calculator
var currentAge = 44;
var maxAge = 100;
var estDailyAmount = 2;

var totalSnacksToEat = 2 * (maxAge - currentAge);

console.log('You will need ' + totalSnacksToEat + ' snacks to last you until the ripe old age of ' + maxAge);
