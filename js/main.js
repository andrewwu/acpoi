var poiByCity = {};
var cities = [];
var selectedCity = null;
var selectedPOI = null;

$(document).on('pageinit', '#index-page', function() {
  $.getJSON('data.json', function(data) {
    
    $.each(data.data, function(key, val) {
      var poi = new Object();
      poi.id = val[0];
      poi.name = val[9];
      poi.location = val[10];
      poi.telephone = val[11];

      // val[8] == city
      if (!poiByCity.hasOwnProperty(val[8])) {
        poiByCity[val[8]] = [];
      }
      poiByCity[val[8]].push(poi);
    });

    for (var key in poiByCity) {
      cities.push(key);
    }

    for (var i = 0; i < cities.length; i++) {
      $('select#city').append("<option value='" + cities[i] + "'>" + cities[i] + "</option>")
    }
  });

  $('button#find').click(function(e) {
    e.preventDefault(); 

    selectedCity = $('select#city').val();
    if (selectedCity == "") {
      alert("Please select a city.");
    }
    else {
      $.mobile.changePage('city.html');
    }
  });
});
