var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var lastElement = days_of_the_week.pop();
days_of_the_week.unshift(lastElement);

var new_days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ['Saturday', 'Sunday']];

var removeWeekend = new_days_of_the_week.splice(0, 5);

removeWeekend.sort();
