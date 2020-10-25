const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

let menu = document.querySelector('.menu');
let navs = document.querySelector('.navs');
let navLinks = document.querySelectorAll('.nav ul li')
let menuContactItem = document.querySelectorAll('.menu__contact-item');
let menuSubscribeTitle = document.querySelector('.menu__subscribe-title');
let menuSubscribeIco = document.querySelectorAll('.menu__subscribe-ico');

let menuTl = new TimelineMax();

menuTl
    .to(menu, 0.5, { marginTop: '0%', opacity: 1 })
    .fromTo(navs, 0.5, { width: '0%', opacity: 0 }, { width: '30%', opacity: 1 })
    .staggerFrom(navLinks, 0.3, { y: 50, opacity: 0 }, 0.1)
    .staggerFrom(menuContactItem, 0.3, { y: -50, opacity: 0 }, 0.1)
    .from(menuSubscribeTitle, 0.3, { y: -50, opacity: 0 })
    .staggerFrom(menuSubscribeIco, 0.3, { x: -50, opacity: 0 }, 0.1);

menuTl.reverse();

let burger = document.querySelector('.burger');
let navsClose = document.querySelector('.navs__close-ico');

burger.addEventListener('click', function() {
    menuTl.reversed(!menuTl.reversed());
});

navsClose.addEventListener('click', function() {
    menuTl.reversed(!menuTl.reversed());
});



jQuery(function() {

    let comfortSlides = $('.comfort__slides');

    comfortSlides.slick({
        centerMode: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        cssEase: 'linear',
        draggable: false,
        autoplay: true,
        speed: 10000,
        dots: false,
        arrows: false,
        pauseOnHover: false
    });

});