$( document ).ready(function() {
  anchorScroll();
  transparentMenu();

  $('.fa-bars').on('click', toggleMenu)
  $(window).scroll(function(){
    transparentMenu()
  });

});

function transparentMenu(){
  var wScroll = $(this).scrollTop();
  if(wScroll > 0){
    $('nav').removeClass('transparent')
  }
  else{
    $('nav').addClass('transparent')
  }
}

function toggleMenu(){
  $('.menu').toggleClass('opened');
}

function anchorScroll(){
  $('a[href*="#"]:not([href="#"])').click(function(){
  if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){

    var target=$(this.hash);
    toggleMenu()
    target = target.length ? target:$('[name='+this.hash.slice(1)+']');

    if(target.length){$('html, body').animate({
      scrollTop:target.offset().top
    },1000);

      return false;
    }}
  });
}