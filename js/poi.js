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
  $('span#poi-location').text(location);

  if (selectedPOI.telephone != null) {
    telephone = selectedPOI.telephone;
  }
  $('span#poi-telephone').text(telephone);

  $('a#back-btn').click(function(e) {
    e.preventDefault();
    history.back();
  });
});
