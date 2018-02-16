var request = require('request');
var location = process.argv[2];

var url = "api.openweathermap.org/data/2.5/weather?q=" + location;

request(url, function(){


});
