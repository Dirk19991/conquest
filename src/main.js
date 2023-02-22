const burgerSign = document.querySelector('.header__burger_sign');
const burgerMenu = document.querySelector('.header__burger_menu');
const burgerLinks = document.querySelectorAll('.header__burger_link');

burgerSign.addEventListener('click', () => {
  burgerMenu.classList.toggle('overlay');
  burgerSign.classList.toggle('close');
});

burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    console.log('hi');
    burgerMenu.classList.remove('overlay');
    burgerSign.classList.remove('close');
  });
});
