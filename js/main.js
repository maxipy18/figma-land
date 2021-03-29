


const burger = document.querySelector('.burger-logo');
const navMenu = document.querySelector('.nav-menu');
const navMenuLink = document.querySelectorAll('.nav-menu__link');
const headerNav = document.querySelector('.header-nav');


burger.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
    navMenuLink.forEach((item)=>{
        item.classList.toggle('active');
    });   
    navMenu.style.top = `${headerNav.offsetHeight}px`;
});