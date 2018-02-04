var gifOffset = 10;
var $list = $('.list');

// ajax request and creating dom elements
function ajaxGifRequest(request) {
  $.ajax(request).done(function(response) {
    response.data.forEach(function(result) {
      var $newSectElem = $('<section>');
      var $newImageElem = $('<img>');
      $newSectElem.append($newImageElem);
      $newImageElem.attr('src', result.images.fixed_width.url);
      $list.append($newSectElem);
    });
  });
}

$('button').on('click', function() {
  var $inputValue = $('input').val();
  var giphs1 = {
    url: "http://api.giphy.com/v1/gifs/search?q=" + $inputValue + "&api_key=Y7syfs6uxUSXC1AZtFb3M9BgiQyb6T3z&limit=10"
  };
  $('.list').empty();
  $('input').val('');
  ajaxGifRequest(giphs1);

  // Searches working ok until i refactored the code and created a ajax/dom function. Having an issue with the $inputValue/gifOffset in the scroll function on subsequent searches. First 10 results are correct but it's not resetting to new value when you scroll down. I alternates old/new every 10 results.

  $(window).scroll(function() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      var giphs2 = {
        url: "http://api.giphy.com/v1/gifs/search?q=" + $inputValue + "&api_key=Y7syfs6uxUSXC1AZtFb3M9BgiQyb6T3z&limit=10&offset=" + String(gifOffset)
      };
      ajaxGifRequest(giphs2);
      gifOffset += 10;
    }
  });
});
