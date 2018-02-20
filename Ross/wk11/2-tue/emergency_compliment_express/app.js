var express = require('express');
var app = express();
var complimentController = require('./complimentController');
const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('home');
});




app.listen(PORT, function(){
  console.log('listening on port ' + PORT);
});
