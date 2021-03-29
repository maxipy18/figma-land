


const burger = document.querySelector('.burger-logo');
const navMenu = document.querySelector('.nav-menu');
const navMenuLink = document.querySelectorAll('.nav-menu__link');
const headerNav = document.querySelector('.header-nav');
const loginBtn = document.querySelector('.login-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');


burger.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
    navMenuLink.forEach((item)=>{
        item.classList.toggle('active');
    });   
    navMenu.style.top = `${headerNav.offsetHeight}px`;
});

loginBtn.addEventListener('click', ()=>{
    modal.classList.toggle('active');    
});

modal.addEventListener('click', (event)=>{
    if(event.target.classList.contains('modal')){
        modal.classList.remove('active');
    };
});

closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('active');
});