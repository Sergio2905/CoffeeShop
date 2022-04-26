let menu = document.querySelector('.menu');
document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

let search = document.querySelector('.header__search-form');
document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
    cart.classList.remove('active');
}

let cart = document.querySelector('.cart');
document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    menu.classList.remove('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}