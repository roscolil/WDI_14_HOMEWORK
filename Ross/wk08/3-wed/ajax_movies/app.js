
var $container = $('.container');

$('button').on('click', function() {
  var $newMovieName = $('input').val();
  var options = {
    url: "http://www.omdbapi.com/?apikey=2f6435d9&s=" + $newMovieName
  };
  $('.container').empty();
  $.ajax(options).done(function(response){
    response.Search.forEach(function(movie){
      var $newSectElem = $('<section>');
      var $newH2Elem = $('<h2>');
      var $newImageElem = $('<img>');

      $newSectElem.append($newH2Elem);
      $newSectElem.append($newImageElem);
      $newH2Elem.text(movie.Title);
      $newImageElem.attr('src', movie.Poster);
      $container.append($newSectElem);
      $('input').val('');
    });
  });
});
