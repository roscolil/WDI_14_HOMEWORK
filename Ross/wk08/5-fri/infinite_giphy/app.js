var $list = $('.list');
var gifLimit = 10;
var gifOffset = 10;


$('button').on('click', function(){
  var $inputValue = $('input').val();
  var giphs = {
    url: "http://api.giphy.com/v1/gifs/search?q=" + $inputValue + "&api_key=Y7syfs6uxUSXC1AZtFb3M9BgiQyb6T3z&limit=" + String(gifLimit)
  };

  $('.list').empty();
  $.ajax(giphs).done(function(response){
    response.data.forEach(function(result){
      var $newSectElem = $('<section>');
      var $newImageElem = $('<img>');
      $newSectElem.append($newImageElem);
      $newImageElem.attr('src', result.images.fixed_width.url);
      $list.append($newSectElem);
      $('input').val('');
    });
  });

  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      var giphs = {
        url: "http://api.giphy.com/v1/gifs/search?q=" + $inputValue + "&api_key=Y7syfs6uxUSXC1AZtFb3M9BgiQyb6T3z&limit=10&offset=" + String(gifOffset)
      };

      $.ajax(giphs).done(function(response){
        response.data.forEach(function(result){
          var $newSectElem = $('<section>');
          var $newImageElem = $('<img>');
          $newSectElem.append($newImageElem);
          $newImageElem.attr('src', result.images.fixed_width.url);
          $list.append($newSectElem);
          gifOffset = gifOffset + 10;
        });
      });
    }
  });
});
