// Declare origin and destination and print to console
var origin = 'Richmond';
var destination = 'Hawthorn';

// Print origin/destination to console
console.log('Origin: ' + origin);
console.log('Destination: ' + destination);

// Declare an array for each train line
var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

// Return positions of origin/destination stations and extracted parts of into new string
var originIndex = alameinLine.indexOf(origin);
var destIndex = alameinLine.indexOf(destination) + 1;
var stationStr = alameinLine.slice(originIndex, destIndex);

for (i = 0; i <= stationStr.length - 2; i++) {
  console.log(stationStr[i].toString() + ' ------>');
}
console.log(stationStr[i]);

// Calculate and print number of stops for journey
var stops = Math.abs(destIndex - originIndex - 1);
console.log(stops + ' stops total.');
