// Declare origin and destination and print to console
var origin = 'Richmond';
var destination = 'Hawthorn';

console.log('Origin: ' + origin);
console.log('Destination: ' + destination);

// Declare an array for each train line
var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var SandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var originIndex = alameinLine.indexOf(origin);
var destIndex = alameinLine.indexOf(destination) + 1;
var stationStr = alameinLine.slice(originIndex, destIndex).toString();
var stops = Math.abs(destIndex - originIndex - 1);


for (var i = 0; i <= alameinLine.length; i++) {
    console.log(stationStr + ' --------> ');
}
console.log(stops + ' stops total.');




// Convert array to string and compare to 'Richmond' using 'else if'??
