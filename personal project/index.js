
const numb = document.querySelector(".numb");
let counter = 0;
 setInterval(()=>{
   if(counter == 100){
     clearInterval();

   }else{
     counter+=1;
     numb.textContent = counter + "%";
   }
     
 },80);






const typed = new Typed('.text1', {
  strings: ['Web designer',
            'fontend devoloper',
             'Photographer.'
            
            ],
            typeSpeed: 40,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
});

$(function(){
    $('.circlechart').circlechart();

  });

  

  
  $(document).ready(function(){
    var mixer =mixitup('.box-list');
  });




 



  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});
  

  

