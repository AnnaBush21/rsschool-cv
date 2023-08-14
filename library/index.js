const header_burger_btn = document?.querySelector('[data-header_burger_btn]');
const nav_menu = document?.querySelector('[data-nav_menu]');
const body =document.body;

header_burger_btn?.addEventListener('click', () => {
body.classList.toggle('stop-scroll');
header_burger_btn?.classList.toggle('header_burger_btn--active');
nav_menu?.classList.toggle('nav_menu--visible');
});