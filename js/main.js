var poiByCity = {};
var cities = [];

$(document).on('pageinit', '#index-page', function() {
  $.getJSON('data.json', function(data) {
    
    $.each(data, function(key, val) {
      var poi = new Object();
      poi.name = val[9];
      poi.location = val[10];
      poi.telephone = val[11];

      // val[8] == city
      if (!poiByCity.hasOwnProperty(val[8])) {
        poiByCity[val[8]] = [];
      }
      poiByCity[val[8]].push(poi);
    });
  });
});
