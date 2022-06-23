$(document).ready(function () {

    $('#menu').click(function(){
         $(this).toggleClass('fa-times');
         $('header').toggleClass('toggle');
    });

$(window).on('scroll load',function(){

  $('#menu').removeClass('fa-times');
  $('header').removeClass('toggle');

  if($(window).scrollTop() > 0)
  {
$('.top').show();
  }
  else{
$('.top').hide();
  }

});

        //   //smooth scrolling
      // $('a[href*="#"]').click(function(e){
      //   e.preventDefault();
      //   $('html','body').animate({
      //       scrollTop : $($(this).attr('href')).offset().top,
      //   },
      //   500,
      //   'linear');
      // });


    var items = document.querySelectorAll("li");

    function isItemInView(item){
      var rect = item.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isItemInView(items[i])) {
            items[i].classList.add("show");
          }
        }
      }
    
      // listen for events
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);


    

});