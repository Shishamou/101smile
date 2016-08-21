window.$ = window.jQuery = require('jquery');
// window.Vue = require('vue');
// require('bootstrap-sass');


$(document).ready(function() {
  // 導覽列向下滾動
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

  $('#service').map(function(e) {
    var $iframe = $(this).find('iframe');
    $(this).find('.tabs a')
      .click(function(e) {
        e.preventDefault();
        $iframe.attr('src', $(this).attr('href'));
        $('.actived').removeClass('actived');
        $(this).parent().addClass('actived');
      }).first().click();
  });

  $('.box').map(function(e) {
    var $iframe = $(this).find('iframe');
    var $this = $(this);
    var close = function(e) {
      $this.hide();
    }
    $(this).click(close);
    $(this).find('.box-control').click(close);
    $(this).find('.box-content').click(function(e) {
      e.preventDefault();
    });

    $('#team a').click(function(e) {
      e.preventDefault();
      $iframe.attr('src', $(this).attr('href'));
      $this.show();
    })
  });
});
