$(document).on('pageinit', '#poi-page', function() {

  var name = "Name";
  var location = "--";
  var telephone = "--";

  if (selectedPOI.name != null) {
    name = selectedPOI.name; 
  }

  $('h1#poi-name').text(name);

  if (selectedPOI.location != null) {
    location = selectedPOI.location;
  }
  $('div#poi-location').text(location);

  if (selectedPOI.telephone != null) {
    telephone = selectedPOI.telephone;
  }
  $('div#poi-telephone').text(telephone);
});