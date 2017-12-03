// PT Planner program

// Prompt for and initialize origin and destination variables
// var origin = prompt('Please enter the station you are coming from.');
// var destination = prompt('Please enter the station you are going to.');
var origin = 'Richmond';
var destination = 'Hawthorn';

// Declare an array for each train line
var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

// Display origin/destination
console.log('Origin: ' + origin);
console.log('Destination: ' + destination);

// Function to calculate and print number of stops for journey
var displayStops = function (destIndex, originIndex) {
  var stops = Math.abs(destIndex - originIndex);
  console.log(stops + ' stops total.');
  return;
};

// Function to display stations en route to destination
var displayStations = function (stationStr) {
  for (i = 0; i <= stationStr.length - 2; i++) {
    console.log(stationStr[i].toString() + ' ------>');
  }
  console.log(stationStr[i]);
  return;
};

// Compare and return stations and number of stops for single line travel
if (alameinLine.includes(origin) && alameinLine.includes(destination)) {
  var originIndex = alameinLine.indexOf(origin);
  var destIndex = alameinLine.indexOf(destination);
  var stationStr = alameinLine.slice(originIndex, destIndex + 1);

  displayStations(stationStr);
  displayStops(destIndex, originIndex);
}
else if (glenWaverlyLine.includes(origin) && glenWaverlyLine.includes(destination)) {
  var originIndex = glenWaverlyLine.indexOf(origin);
  var destIndex = glenWaverlyLine.indexOf(destination);
  var stationStr = glenWaverlyLine.slice(originIndex, destIndex + 1);

  displayStations(stationStr);
  displayStops(destIndex, originIndex);
}
else if (sandringhamLine.includes(origin) && sandringhamLine.includes(destination)) {
  var originIndex = sandringhamLine.indexOf(origin);
  var destIndex = sandringhamLine.indexOf(destination);
  var stationStr = sandringhamLine.slice(originIndex, destIndex + 1);

  displayStations(stationStr);
  displayStops(destIndex, originIndex);
}
else {
  console.log('You will need to change lines at Richmond');
}
