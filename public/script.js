$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('.navbar').addClass("sticky");  
         }
        else{
             $('.navbar').removeClass("sticky");
     
        
           }
           if(this.scrollY > 500){
             $('.scroll-up-btn').addClass("show");

           }
           else{
             $('.scroll-up-btn').removeClass("show");
    }
        });

        //slide up script
        $('.scroll-up-btn').click(function(){
$('html').animate({scrollTop: 0});
        });

//typing animtion
var typed = new Typed(".typing",{
  strings: ["web developer" ,"web designer","freelancer","app designer" ],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})

var typed = new Typed(".typing2",{
  strings:["web developer" ,"web designer","freelancer","app designer" ],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})







    

//toggle menu
$('.menu-btn').click(function(){
$('.navbar .menu').toggleClass("active");
$('.menu-btn i').toggleClass("active");



});






//owl
$('.team-content').OwlCarousel2({
  margin:20,
  loop: true,
  
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      itmes:1,
    nav:false
    },
    600:{
      itmes:2,
      nav:false
    },
    1000:{
      itmes:5,
      nav:false
    }

  }

  
  
  
  

}); 
});

