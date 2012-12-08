$(document).on('pageinit', '#city-page', function() {
  var places = poiByCity[selectedCity];

  for (var i = 0; i < places.length; i++) {
    $('ul#poi-list').append("<li><a href='#'>" + places[i].name + "</a></li>");
  }
  $('ul#poi-list').listview('refresh');

  $('h1#city-name').text(selectedCity);
  $('title#city-title').text(selectedCity);

  $('ul#poi-list').on('click', ' > li', function () {
    var selectedIndex = $(this).index();
    selectedPOI = places[selectedIndex];
    $.mobile.changePage('poi.html', {transition: "slide"});
  });
});
