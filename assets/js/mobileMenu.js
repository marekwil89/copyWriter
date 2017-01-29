$( document ).ready(function() {
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    if(wScroll > 0){
      $('nav').removeClass('transparent')
    }
    else{
      $('nav').addClass('transparent')
    }

  });

  $('.fa-bars').on('click', function(){
    $('.menu').toggleClass('opened');
  })

});