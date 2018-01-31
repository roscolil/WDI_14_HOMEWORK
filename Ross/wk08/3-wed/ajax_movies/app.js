var options = {
  url: 'http://www.omdbapi.com/?apikey=2f6435d9&s=jaws'
};

var $list = $('.container');

$.ajax(options).done(function(response){
  response.Search.forEach(function(movie){
    var $newParaElem = $('<p>');
    var $newH2Elem = $('<h2>');
    var $newImageElem = $('<img>');
    $newParaElem.append($newH2Elem);
    $newH2Elem.append($newImageElem);
    $newH2Elem.text(movie.Title);
    $newImageElem.text(movie.Poster);
    $container.append($newParaElem);
  });
});


$('button').on('click', function() {
  var $newChildName = $('input').val();
  var $newChild = $('<p>').text($newChildName);
  $container.append($newChild);
});
