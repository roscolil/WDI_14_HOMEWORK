// PT Planner program

// Initialize origin and destination variables
// var origin = prompt('Please enter the station you are coming from:');
// var destination = prompt('Please enter the station you are going to:');

var origin = 'Flinder Street';
var destination = 'Kooyong';
var numberOfStops;
var stationStr;

// Declare an array for each train line and station
var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var trainNetwork = [alameinLine, glenWaverlyLine, sandringhamLine];


// Display origin/destination
console.log('Origin: ' + origin);
console.log('Destination: ' + destination);

// Function to calculate and print number of stops for journey
var displayStops = function(destIndex, originIndex) {
  numberOfStops = Math.abs(destIndex - originIndex);
  return numberOfStops;
};

// Function to display stations en route to destination
var displayStations = function(stationStr) {
  for (i = 0; i <= stationStr.length - 2; i++) {
    stationStr[i].toString();
  }
  return stationStr;
};

var changeStationsMsg = function() {
  console.log('You will need to change lines at Richmond');
};

for (var i = 0; i < trainNetwork.length; i++) {
  if (trainNetwork[i].includes(origin) && trainNetwork[i].includes(destination)) {
    var originIndex = trainNetwork[i].indexOf(origin);
    var destIndex = trainNetwork[i].indexOf(destination);
    var stationStr = trainNetwork[i].slice(originIndex, destIndex + 1);

    displayStations(stationStr);
    console.log(stationStr.join(' -----> '));

    displayStops(destIndex, originIndex);
    console.log(numberOfStops + ' stops total.');
  }
  else {   // If origin and destination not on same line
    var originIndex = trainNetwork[i].indexOf(origin);
    var destIndex = trainNetwork[i].indexOf(destination);
    var stationStr = trainNetwork[i].slice(originIndex, destIndex + 1);

    displayStations(stationStr);
    console.log(stationStr.join(' -----> '));

    displayStops(destIndex, originIndex);
    console.log(numberOfStops + ' stops total.');
  }
  changeStationsMsg();
}


// Notes: Need to get the reverse trip working
//        Build trip via Richmond for multiple lines
//        Validate user input
