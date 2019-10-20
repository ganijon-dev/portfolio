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
    },
});

window.sr = ScrollReveal();

sr.reveal('nav', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.name', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.basic-info', {
    duration: 2000,
    origin: 'right',
    distance: '100px'
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
    distance: '50px',
    viewFactor: 0.2,
    delay: 500
});
sr.reveal('.job-info', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    viewFactor: 0.2,
    delay: 500
});
sr.reveal('.experince-title', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    viewFactor: 0.1,

});
sr.reveal('.experince-title', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    viewFactor: 0.1
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
    distance: '100px',
    viewFactor: 0.1
});
sr.reveal('.web-frame', {
    duration: 600,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.1,
    delay: 600
});
sr.reveal('.programming-frame', {
    duration: 600,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.1,
    delay: 1200
});



$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 0);
                return false;
            }
        }
    });
});


$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})
