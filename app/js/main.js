document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', function(e) {
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });

    const lazy = new LazyLoad();

    let heroBtn = document.querySelectorAll('.hero__btn');
    let heroPic = document.querySelectorAll('.hero__pic');
    let heroSmoke = document.querySelectorAll('.hero__smoke');

    heroBtn[0].addEventListener('mouseenter', () => {
        heroPic[0].style.width = '100%';
        heroPic[0].style.height = '100%';
        heroSmoke[0].style.opacity = '1';
    });

    heroBtn[0].addEventListener('mouseleave', () => {
        heroPic[0].style.width = '80%';
        heroPic[0].style.height = '80%';
        heroSmoke[0].style.opacity = '0';
    });

    heroBtn[1].addEventListener('mouseenter', () => {
        heroPic[1].style.width = '100%';
        heroPic[1].style.height = '100%';
        heroSmoke[1].style.opacity = '1';
    });

    heroBtn[1].addEventListener('mouseleave', () => {
        heroPic[1].style.width = '80%';
        heroPic[1].style.height = '80%';
        heroSmoke[1].style.opacity = '0';
    });

    // GSAP

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

    let burger = document.querySelectorAll('.burger');
    console.log(burger);
    let navsClose = document.querySelector('.navs__close-ico');

    burger[1].addEventListener('click', () => {
        menuTl.reversed(!menuTl.reversed());
    });

    navsClose.addEventListener('click', () => {
        menuTl.reversed(!menuTl.reversed());
    });

    let burgerTl = new TimelineMax();

    let mobiHeaderNav = document.querySelector('.header-mobi__nav');
    let mobiHeaderNavItem = document.querySelectorAll('.header-mobi__nav ul li');

    burgerTl
        .fromTo(mobiHeaderNav, 0.3, { height: 0, opacity: 0 }, { height: '226px', opacity: 1 })
        .staggerFrom(mobiHeaderNavItem, 0.4, { y: 50, opacity: 0 }, 0.2);

    burgerTl.reverse();

    let pagesHeaderBurger = document.querySelector('.pages-header__burger');

    pagesHeaderBurger.addEventListener('click', () => {
        burgerTl.reversed(!burgerTl.reversed());
    });


    // ScrollMagic

    let weekendTitle = document.querySelector('.weekend__title');
    let weekendTitleDiv = document.querySelectorAll('.weekend__title div');
    let weekendDescs = document.querySelector('.weekend__descs');
    let weekendDesc = document.querySelectorAll('.weekend__desc');

    const weekendTitleController = new ScrollMagic.Controller();
    const weekendDescsController = new ScrollMagic.Controller();

    const weekendTitleTl = new TimelineMax();
    const weekendDescsTl = new TimelineMax();

    weekendTitleTl.staggerFrom(weekendTitleDiv, 1, { y: 50, opacity: 0 }, 0.3);
    weekendDescsTl.from(weekendDesc, 1, { y: 50, opacity: 0 });

    const weekendTitleScene = new ScrollMagic.Scene({
            triggerElement: weekendTitle,
            triggerHook: 1
        })
        .setTween(weekendTitleTl)
        .addTo(weekendTitleController);

    const weekendDescsScene = new ScrollMagic.Scene({
            triggerElement: weekendDescs,
            triggerHook: 1
        })
        .setTween(weekendDescsTl)
        .addTo(weekendDescsController);

});

// jQ

jQuery(function() {

    let sliderTop = $('.slider_top');

    sliderTop.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        slideTransition: 'linear',
        rtl: false,
        autoplaySpeed: 30000,
        margin: 10,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });

    let sliderMid = $('.slider_mid');

    sliderMid.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        center: true,
        slideTransition: 'linear',
        rtl: false,
        autoplaySpeed: 40000,
        margin: 10,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });

    let sliderBot = $('.slider_bot');

    sliderBot.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        slideTransition: 'linear',
        rtl: false,
        autoplaySpeed: 10000,
        margin: 10,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });

    let gallery = $('.gallery');

    gallery.owlCarousel({
        items: 2,
        loop: true,
        margin: 100,
        smartSpeed: 1500,
        dots: false,
        nav: true,
        navText: ['<div class="gallery-left-btn"><span class="arrow arrow_left"><img src="img/ico/arrow_left.svg" alt=""></span>предыдущий</div>', '<div class="gallery-right-btn">следующий<span class="arrow arrow_right"><img src="img/ico/arrow_right.svg" alt=""></span></div>'],
    });

    let galleryLeftBtn = $('.gallery-left-btn');
    let galleryLeftArrow = $('.arrow_left');
    let galleryRightBtn = $('.gallery-right-btn');
    let galleryRightArrow = $('.arrow_right');

    galleryLeftBtn.on('click', function() {
        galleryRightBtn.removeClass('color-primary');
        $(this).addClass('color-primary');
    });

    galleryRightBtn.on('click', function() {
        galleryLeftBtn.removeClass('color-primary');
        $(this).addClass('color-primary');
    });

    let fieldGallery = $('.page-field__gallery');

    fieldGallery.owlCarousel({
        items: 3,
        loop: true,
        margin: 100,
        smartSpeed: 1500,
        center: true,
        dots: false,
        nav: true,
        navText: ['<div class="gallery-left-btn"><span class="arrow arrow_left"><img src="img/ico/arrow_left.svg" alt=""></span>предыдущий</div>', '<div class="gallery-right-btn">следующий<span class="arrow arrow_right"><img src="img/ico/arrow_right.svg" alt=""></span></div>'],
    });

});