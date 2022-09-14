const iconMenu = document.querySelector('#iconMenu');
const menu = document.querySelector('menu');

/* Este es el código que hace que la barra de navegación aparezca y desaparezca. */
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}