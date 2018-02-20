var express = require('express');
var app = express();
var _ = require('lodash');
var complimentController = require('./complimentController');
const PORT = 8080;


// I'm really struggling with trying to remember how to get the array to print data to the screen. Some help with it would be good as i feel that i have a lot of incomplete exercises because i'm missing some of the details.

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res){
  res.render('home');
});

app.get('/', complimentController.index)


app.listen(PORT, function(){
  console.log('listening on port ' + PORT);
});
