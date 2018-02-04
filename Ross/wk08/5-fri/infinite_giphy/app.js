var $inputValue;
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

// Search click event
$('button').on('click', function() {
  $inputValue = $('input').val();
  var giphs1 = {
    url: "http://api.giphy.com/v1/gifs/search?q=" + $inputValue + "&api_key=Y7syfs6uxUSXC1AZtFb3M9BgiQyb6T3z&limit=10"
  };

  $('.list').empty();
  $('input').val('');
  ajaxGifRequest(giphs1);

  // Incrementing offset by 10 each time user scrolls to bottom of page
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
