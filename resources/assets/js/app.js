window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');
// require('bootstrap-sass');


$(document).ready(function() {
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var dest = $(this).attr('href');
    dest = $(dest).offset();
    if (dest) {
      $('html,body').animate({
        scrollTop: dest.top
      }, 'slow');
    }
  });
});
