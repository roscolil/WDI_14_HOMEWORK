// var originIndex = alameinLine.indexOf(origin);
// var destIndex = alameinLine.indexOf(destination) + 1;
// var stationStr = alameinLine.slice(originIndex, destIndex);
//
//
//
// var originLine =
// var destinationLine =
//
//
//   if (alameinLine.includes(origin) && alameinLine.includes(destination)) {
//     var originIndex = alameinLine.indexOf(origin);
//     var destIndex = alameinLine.indexOf(destination) + 1;
//     var stationStr = alameinLine.slice(originIndex, destIndex);
//
//     for (i = 0; i <= stationStr.length - 2; i++) {
//       console.log(stationStr[i].toString() + ' ------>');
//     }
//     console.log(stationStr[i]);
//   }
//   else if (glenWaverlyLine.includes(origin) && glenWaverlyLine.includes(destination)) {
//     var originIndex = glenWaverlyLine.indexOf(origin);
//     var destIndex = glenWaverlyLine.indexOf(destination) + 1;
//     var stationStr = glenWaverlyLine.slice(originIndex, destIndex);
//
//     for (i = 0; i <= stationStr.length - 2; i++) {
//       console.log(stationStr[i].toString() + ' ------>');
//     }
//     console.log(stationStr[i]);
//   }
//   else if (sandringhamLine.includes(origin) && sandringhamLine.includes(destination)) {
//     var originIndex = sandringhamLine.indexOf(origin);
//     var destIndex = sandringhamLine.indexOf(destination) + 1;
//     var stationStr = sandringhamLine.slice(originIndex, destIndex);
//
//     for (i = 0; i <= stationStr.length - 2; i++) {
//       console.log(stationStr[i].toString() + ' ------>');
//     }
//     console.log(stationStr[i]);  }
//   else {
//     console.log('You will need to change lines at Richmond');
//   }

// var trainLines = [alameinLine, glenWaverlyLine, sandringhamLine];
//
// for (var i = 0; i < trainLines.length; i++) {
//   if (trainLines[i].includes(origin) && trainLines[i].includes(destination)) {
//     var originIndex = trainLines[i].indexOf(origin);
//     var destIndex = trainLines[i].indexOf(destination);
//     var stationStr = trainLines[i].slice(originIndex, destIndex + 1);
//
//     displayStations(stationStr);
//     displayStops(destIndex, originIndex);
// }

// var origin = prompt('Please enter the station you are coming from:').toLowerCase();
// var destination = prompt('Please enter the station you are going to:').toLowerCase();
//
//
// // var origin = '';
// // var destination = '';
// // var userInput = '';
//
// // var trainLinesLower = alameinLine.join(glenWaverlyLine, sandringhamLine);
//
// var validateInput = function(origin) {
//   if (origin !== trainLines.includes()) {
//     alert('Please enter a valid station.')
//   } else if (origin === null) {
//     alert('You cannot leave this field empty. Click OK to try again.');
//     origin = prompt('Please enter the station you are coming from:').toLowerCase();
//   }
//   return origin;
// };


var reverseStations = function (networkArray) {
  for (var i = 0; i < networkArray.length; i++) {

    networkArray[i].split('').reverse().join('');
    return networkArray;
  }
};


 var stations = ['Flinders Street', 'Richmond', 'East Richmond'];

 var origin = 'Flinders Street';
 var destination = 'East Richmond';
 var journey = '';

 console.log('Origin: ' + origin);
 console.log('Destination: ' + destination);

var originIndex = stations.indexOf(origin);
var destIndex = stations.indexOf(destination);

if (originIndex !== -1 && destIndex !== -1) {
    console.log(destIndex - originIndex + ' stops');
}

for (var i = originIndex; i <= destIndex; i++) {
  if (i === destIndex) {
    journey += stations[i];
  } else {
    journey += stations[i] + ' ----> ';
  }
}

console.log(journey);
