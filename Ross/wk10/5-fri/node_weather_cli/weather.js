var request = require('request');
var location = process.argv[2];

var url = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=77e9766c73f97d889a41ced24f3a18ad";

request(url, function(error, response, body){
  var output = JSON.parse(body);
  var tempCelsius = output.main.temp - 273.15;
  console.log(tempCelsius.toFixed(1));
});
