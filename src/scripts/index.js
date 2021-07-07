import '../styles/index.less';

const mediaQueryList = window.matchMedia("(min-width: 600px)");

window.addEventListener('scroll', function(){
  let headerNode = window.document.getElementsByTagName('HEADER')[0];
  if (mediaQueryList.matches) {
    return false;
  } else {
    if(window.pageYOffset > 0) {
      headerNode.classList.add('header--fixed');
    } else {
      headerNode.classList.remove('header--fixed');
    }
  }
});

let menuContainer = document.querySelector('header a'),
    menuButton = document.querySelector('.menu__icon'),
    menuTitle = document.querySelector('.menu__title'),
    menuModal = document.getElementById('menu');

function toggleMenu(event){
  event.preventDefault();
  menuButton.classList.toggle('active');
  menuModal.classList.toggle('active');
}

if (!mediaQueryList.matches) {
  window.document.addEventListener('click', function(e){
    if(e.target == menuTitle) {
      if (menuButton.classList.contains('active')) {
        toggleMenu(e);
      } else {
        toggleMenu(e);
      }
    } else if (e.target == menuButton) {
      if (menuButton.classList.contains('active')) {
        toggleMenu(e);
      } else {
        toggleMenu(e);
      }
    } else if (e.target !== (menuTitle || menuButton)) {
      if (e.target == menuContainer) {
        toggleMenu(e);
      } else {
        menuButton.classList.remove('active');
        menuModal.classList.remove('active');
      }
    }
  });
} else {
  window.document.removeEventListener('click', function(){});
}