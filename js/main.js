const menuBar = document.getElementById('menu-bar');
const menu    = document.getElementById('menu');

/* Toggle nav open/closed */
menuBar.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('active');

  /* Swap hamburger ↔ close icon */
  menuBar.classList.toggle('fa-bars', !isOpen);
  menuBar.classList.toggle('fa-xmark', isOpen);
});

/* Close nav when a link is clicked */
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* Close nav when clicking outside */
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBar.contains(e.target)) {
    closeMenu();
  }
});

function closeMenu() {
  menu.classList.remove('active');
  menuBar.classList.add('fa-bars');
  menuBar.classList.remove('fa-xmark');
}

// navbar
var head = document.querySelector("header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    head.classList.add("header-scrolled");
  } else {
    head.classList.remove("header-scrolled");
  }
};