var originIndex = alameinLine.indexOf(origin);
var destIndex = alameinLine.indexOf(destination) + 1;
var stationStr = alameinLine.slice(originIndex, destIndex);



var originLine =
var destinationLine =


  if (alameinLine.includes(origin) && alameinLine.includes(destination)) {
    var originIndex = alameinLine.indexOf(origin);
    var destIndex = alameinLine.indexOf(destination) + 1;
    var stationStr = alameinLine.slice(originIndex, destIndex);

    for (i = 0; i <= stationStr.length - 2; i++) {
      console.log(stationStr[i].toString() + ' ------>');
    }
    console.log(stationStr[i]);
  }
  else if (glenWaverlyLine.includes(origin) && glenWaverlyLine.includes(destination)) {
    var originIndex = glenWaverlyLine.indexOf(origin);
    var destIndex = glenWaverlyLine.indexOf(destination) + 1;
    var stationStr = glenWaverlyLine.slice(originIndex, destIndex);

    for (i = 0; i <= stationStr.length - 2; i++) {
      console.log(stationStr[i].toString() + ' ------>');
    }
    console.log(stationStr[i]);
  }
  else if (sandringhamLine.includes(origin) && sandringhamLine.includes(destination)) {
    var originIndex = sandringhamLine.indexOf(origin);
    var destIndex = sandringhamLine.indexOf(destination) + 1;
    var stationStr = sandringhamLine.slice(originIndex, destIndex);

    for (i = 0; i <= stationStr.length - 2; i++) {
      console.log(stationStr[i].toString() + ' ------>');
    }
    console.log(stationStr[i]);  }
  else {
    console.log('You will need to change lines at Richmond');
  }
