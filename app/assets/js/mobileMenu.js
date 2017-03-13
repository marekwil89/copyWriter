$( document ).ready(function() {
  anchorScroll();
  scrollMoved();

  $('.fa-bars').on('click', toggleMenu)

  $(window).scroll(function(){
    scrollMoved()
  });

});

function scrollMoved(){
  var wScroll = $(this).scrollTop();
  if(wScroll > 0){
    $('nav').removeClass('transparent')
    $('.arrow-up').addClass('visible')
    $('.menu, .logo-img, .fa-bars').addClass('small')
  }
  else{
    $('nav').addClass('transparent')
    $('.arrow-up').removeClass('visible')
    $('.menu, .logo-img, .fa-bars').removeClass('small')
  }
}

function toggleMenu(){
  $('.menu').toggleClass('opened');
}

function anchorScroll(){
  $('a[href*="#"]:not([href="#"])').click(function(){
  if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
    if(this.hash != "#header"){
      toggleMenu()
    }
    var target=$(this.hash);
    
    target = target.length ? target:$('[name='+this.hash.slice(1)+']');
    
    if(target.length){$('html, body').animate({
      scrollTop:target.offset().top - 60
    },1000);

      return false;
    }}
  });
}