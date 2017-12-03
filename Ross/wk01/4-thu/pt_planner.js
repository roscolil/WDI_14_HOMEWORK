//PT PLANNER

// Melbourne Public Transport Journey Planner
//
// There are 3 train lines:
//
// The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
//
// The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
//
// The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.
//
// All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.
//
// Write a javascript program that works out display the journey when you give it an origin and destination.
//
// example:
//
//
// origin: Melbourne Central
// destination: Richmond
//
// Melbourne Central -----> Parliament -----> Richmond
//
// 2 stops total
// You may want to hard code the origin and destination for easier testing in the beginning.
//
// Hints:
//
// Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.
//
// The key to the lab is the intersection of the lines at Richmond.
//
// Non-Required Bonus:
//
// input validation
// User must enter a line and station in the subway network
// If the user enters something else, your program should handle it
// Add additional lines


// Declare origin and destination and print to console
var origin = 'Flagstaff';
var destination = 'Windsor';

// Declare an array for each train line
var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

// Return positions of origin/destination stations and extracted parts of into new string
// var originIndex = alameinLine.indexOf(origin);
// var destIndex = alameinLine.indexOf(destination) + 1;
// var stationStr = alameinLine.slice(originIndex, destIndex);   // Push or pop??

// Print origin/destination to console
console.log('Origin: ' + origin);
console.log('Destination: ' + destination);

if (alameinLine.includes(origin) && alameinLine.includes(destination)) {
  var originIndex = alameinLine.indexOf(origin);
  var destIndex = alameinLine.indexOf(destination);
  var stationStr = alameinLine.slice(originIndex, destIndex + 1);

  for (i = 0; i <= stationStr.length - 2; i++) {
    console.log(stationStr[i].toString() + ' ------>');
  }
  console.log(stationStr[i]);
}
else if (glenWaverlyLine.includes(origin) && glenWaverlyLine.includes(destination)) {
  var originIndex = glenWaverlyLine.indexOf(origin);
  var destIndex = glenWaverlyLine.indexOf(destination);
  var stationStr = glenWaverlyLine.slice(originIndex, destIndex + 1);

  for (i = 0; i <= stationStr.length - 2; i++) {
    console.log(stationStr[i].toString() + ' ------>');
  }
  console.log(stationStr[i]);
}
else if (sandringhamLine.includes(origin) && sandringhamLine.includes(destination)) {
  var originIndex = sandringhamLine.indexOf(origin);
  var destIndex = sandringhamLine.indexOf(destination);
  var stationStr = sandringhamLine.slice(originIndex, destIndex + 1);

  for (i = 0; i <= stationStr.length - 2; i++) {
    console.log(stationStr[i].toString() + ' ------>');
  }
  console.log(stationStr[i]);
}
else {
  console.log('You will need to change lines at Richmond');
}


// Calculate and print number of stops for journey
var stops = Math.abs(destIndex - originIndex);
console.log(stops + ' stops total.');
