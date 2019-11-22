//Swiper Slider of Portfolio
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    infinite: true,
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});


// ScrollReveal Plugin
window.sr = ScrollReveal();
sr.reveal('nav', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.name', {
    duration: 2000,
    origin: 'top',
    distance: '50px'
});

sr.reveal('.basic-info', {
    duration: 2000,
    origin: 'right',
    distance: '40px'
});
sr.reveal('#introduction', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.2
});
sr.reveal('#query-box', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.2
});
sr.reveal('.experince-title', {
    duration: 1000,
    origin: 'top',
    distance: '50px',
    viewFactor: 0.2
});
sr.reveal('.job-title', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    viewFactor: 0.2,
    delay: 500
});
sr.reveal('.job-info', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    viewFactor: 0.2,
    delay: 1000
});
sr.reveal('.experince-title', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    viewFactor: 0.1,

});
sr.reveal('.portfolio-box', {
    duration: 1500,
    origin: 'left',
    distance: '150px',
    viewFactor: 0.1
});
sr.reveal('.swiper-wrapper', {
    duration: 1500,
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.1
});
sr.reveal('.portfolio-title ', {
    duration: 1500,
    origin: 'right',
    distance: '50px',
    viewFactor: 0.1
});

sr.reveal('.frameworks-frame', {
    duration: 600,
    origin: 'left',
    distance: '50px',
    viewFactor: 0.1
});
sr.reveal('.web-frame', {
    duration: 600,
    origin: 'left',
    distance: '50px',
    viewFactor: 0.1,
    delay: 600
});
sr.reveal('.programming-frame', {
    duration: 600,
    origin: 'left',
    distance: '50px',
    viewFactor: 0.1,
    delay: 1200
});




//Adding and Removing of Active Class for Mobile on Navigation
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    });
    $('.nav-btn').click(function (){
        $('.menu-toggle').removeClass('active')
        $('nav').removeClass('active')
    })
});

//Scroll Up btn appear after 300px scrolling
$(document).ready(function (){
    $('.arrow-up').hide()
    });
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
      $(".arrow-up").fadeIn("slow");
  }
});
$(window).scroll(function(){
  if($(window).scrollTop() < 300){
      $(".arrow-up").fadeOut("fast");
  }
});
