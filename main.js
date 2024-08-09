
const d = document;
const w = window;

const menu = d.getElementById('menu-icon');
const nav = d.querySelector('.navbar');


menu.addEventListener('click', e =>{

    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');


});


w.addEventListener('scroll', e => {

    menu.classList.remove('bx-x');
    nav.classList.remove('active');
});