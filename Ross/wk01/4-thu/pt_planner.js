// PT Planner program by Ross Lillis

// Initialize origin and destination variables
// var origin = prompt('Please enter the station you are coming from:');
// var destination = prompt('Please enter the station you are going to:');

var origin = 'Glenferrie';
var destination = 'Flinders Street';
var numberOfStops;
var stationStr;

var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var trainNetwork = [alameinLine, glenWaverlyLine, sandringhamLine];

console.log('Origin: ' + origin);
console.log('Destination: ' + destination);

// Function to calculate and print number of stops for journey
var displayStops = function(destIndex, originIndex) {
  numberOfStops = Math.abs(destIndex - originIndex);
  console.log(numberOfStops + ' stops total.');
  //return numberOfStops;
};

// Function to display stations en route to destination
var displayStations = function(stationStr) {
  console.log(stationStr.join(' -----> '));
  // for (i = 0; i <= stationStr.length; i++) {
  //   stationStr[i].toString();
  // }
  //return stationStr;
};

var changeStationsMsg = function() {
  console.log('You will need to change lines at Richmond');
};


for (var i = 0; i < trainNetwork.length; i++) {
  if (trainNetwork[i].includes(origin) && trainNetwork[i].includes(destination)) {
    var originIndex = trainNetwork[i].indexOf(origin);
    var destIndex = trainNetwork[i].indexOf(destination);

    if (originIndex < destIndex) {
      var stationStr = trainNetwork[i].slice(originIndex, destIndex + 1);
    }
    else {
      var stationStr = trainNetwork[i].slice(destIndex, originIndex + 1);
      stationStr = stationStr.reverse();
    }

    displayStations(stationStr);
    displayStops(destIndex, originIndex);

  }
  else { // If on different lines
    var originIndex = trainNetwork[i].indexOf(origin);
    var destIndex = trainNetwork[i].indexOf(destination);
    var stationStr = trainNetwork[i].slice(originIndex, destIndex + 1);

    displayStations(stationStr);
    displayStops(destIndex, originIndex);

  }
  changeStationsMsg();
}
