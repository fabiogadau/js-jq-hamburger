/*
* Hamburger menu: mostrare / nascondere il menu principale.
*/
var bars = $('header .header-right > a');
var hamburger = $('header .hamburger-menu');
var close = $('header .hamburger-menu .close');

$(bars).click( function() {
  $(hamburger).addClass('active');
});

$(close).click( function() {
  $(hamburger).removeClass('active');
});
