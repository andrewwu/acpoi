$(document).on('pageinit', '#info-page', function() {
  $('a#back-btn').click(function(e) {
    e.preventDefault();
    history.back();
  });
});
