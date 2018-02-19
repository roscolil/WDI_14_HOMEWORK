var request = require('request');
var location = process.argv[2];

var url = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + process.env.WEATHER_KEY;

request(url, function(error, response, body){
  var output = JSON.parse(body);
  var tempCelsius = output.main.temp - 273;
  console.log(tempCelsius.toFixed(1));
});
