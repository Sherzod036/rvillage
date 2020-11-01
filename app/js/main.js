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

let burger = document.querySelector('.burger');
let navsClose = document.querySelector('.navs__close-ico');

burger.addEventListener('click', () => {
    menuTl.reversed(!menuTl.reversed());
});

navsClose.addEventListener('click', () => {
    menuTl.reversed(!menuTl.reversed());
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