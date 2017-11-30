
//var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var days_of_the_week = 'mon tue wed thur fri sat sun'.split(' ');

//var lastElement = days_of_the_week.pop();
//days_of_the_week.unshift(lastElement);
days_of_the_week.unshift(days_of_the_week.pop());


var new_days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ['Saturday', 'Sunday']];

var removeWeekend = new_days_of_the_week.splice(0, 5);

removeWeekend.sort();



var newArray = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],['Saturday', 'Sunday']];

var removeArray = newArray.pop();

removeArray[0].reverse();

console.log(removeArray);
