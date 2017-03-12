$(window).on('load', function() {
  $('.loader').delay(800).fadeOut('slow');
});

$('.close-btn').on('click', function(){
  $('.site-construction').addClass('is-hide')
})