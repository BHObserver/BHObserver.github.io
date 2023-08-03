/* Add Mobile Menu to mobile screen */
const navBtn = document.querySelector('.nav-icon');
const header = document.querySelector('.header-mobile');
const menuContainer = document.querySelector('.mobile-menu-container');
const cross = document.querySelector('.cross');
const navMobile = document.querySelector('.nav-mobile');
const navItems = document.querySelectorAll('.header-desktop li');

navBtn.addEventListener('click', () => {
  header.classList.add('mobile-menu');
  menuContainer.style.display = 'block';
  cross.style.display = 'block';
  navMobile.style.display = 'block';
});

cross.addEventListener('click', () => {
  header.classList.remove('mobile-menu');
  menuContainer.style.display = 'none';
  cross.style.display = 'none';
  navMobile.style.display = 'none';
});

navItems.forEach((element) => {
  element.addEventListener('click', () => {
    header.classList.remove('mobile-menu');
    menuContainer.style.display = 'none';
    cross.style.display = 'none';
    navMobile.style.display = 'none';
  });
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    header.classList.remove('mobile-menu');
    menuContainer.style.display = 'none';
    cross.style.display = 'none';
    navMobile.style.display = 'none';
  }
});

/* Add JS feature to More Button */
const moreBtn = document.querySelector('.moreBtn');
const performer = document.querySelectorAll('.performer');
moreBtn.addEventListener('click', () => {
  performer.forEach((e) => {
    e.style.display = 'flex';
  });
});
