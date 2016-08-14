window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');

require('bootstrap-sass');

$(document).ready(function() {
    console.log($.fn.tooltip.Constructor.VERSION);
});
