// PT Planner program by Ross Lillis

// Initialize origin and destination variables
// var origin = prompt('Please enter the station you are coming from:');
// var destination = prompt('Please enter the station you are going to:');

var origin = 'Flinders Street';
var destination = 'Kooyong';
var interchange = 'Richmond';
var numberOfStops;
var stationStr;

var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var trainNetwork = [alameinLine, glenWaverlyLine, sandringhamLine];

console.log('Origin: ' + origin);
console.log('Destination: ' + destination);

var displayStops = function(destIndex, originIndex) {
  numberOfStops = Math.abs(destIndex - originIndex);
  console.log(numberOfStops + ' stops total.');
};

var displayStations = function(stationStr) {
  console.log(stationStr.join(' -----> '));
};

var changeStationsMsg = function() {
  console.log('You will need to change lines at Richmond');
};


for (var i = 0; i < trainNetwork.length; i++) {
  var originIndex = trainNetwork[i].indexOf(origin);
  var destIndex = trainNetwork[i].indexOf(destination);

  if (trainNetwork[i].includes(origin) && trainNetwork[i].includes(destination)) {

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
  else {

    }
    debugger

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
}
changeStationsMsg();
