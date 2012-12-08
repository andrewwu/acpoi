$(document).on('pageinit', '#poi-page', function() {
  var name = "Name";

  if (selectedPOI.name != null) {
    name = selectedPOI.name; 
  }
  $('h1.poi-name').text(name);
  $('span.poi-name').text(name);

  if (selectedPOI.telephone != null) {
    $('span#poi-telephone').text(selectedPOI.telephone);
  }
  else {
    $('li#poi-telephone-section').remove();
  }

  $('ul#poi-information').listview('refresh');

  $('a#back-btn').click(function(e) {
    e.preventDefault();
    history.back();
  });
});

$(document).on('pagebeforeshow', '#poi-page', function() {
  var map;
  var service;
  var infowindow;

  function initialize() {
    var locationLatLng = new google.maps.LatLng(37.691971,-122.089005);

    map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: locationLatLng,
        zoom: 15
      });

    var request = {
      location: locationLatLng,
      radius: '5000',
      query: selectedPOI.name
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      if (results.length >= 1) {
        var place = results[0];
        if (place.name == selectedPOI.name) {
          $('span#poi-location').text(place.formatted_address);
          $('div#map').removeClass('hidden');

          createMarker(results[0]);
          google.maps.event.trigger(map, "resize");
          map.panTo(place.geometry.location);
        }
        else {
          $('li#poi-map-section').remove();
          if (selectedPOI.location != null) {
            $('span#poi-location').text(selectedPOI.location);
          }
          else {
            $('li#poi-location-section').remove();
          }
        }
      }
      else {
        $('li#poi-map-section').remove();
        if (selectedPOI.location != null) {
          $('span#poi-location').text(selectedPOI.location);
        }
        else {
          $('li#poi-location-section').remove();
        }
      }
    }

    $('ul#poi-information').listview('refresh');
  }

  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
  }

  initialize();
});

$(document).on('pageshow', '#poi-page', function() {
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var disqus_shortname = 'acpoi';
  var disqus_developer = 1;
  var disqus_identifier = selectedPOI.name;
  console.log('identifier is ' + disqus_identifier);

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
});
