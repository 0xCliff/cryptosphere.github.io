const menu_btn = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');

menu_btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
