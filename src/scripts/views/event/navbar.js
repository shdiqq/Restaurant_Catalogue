const iconHamburger = document.querySelector('.menumob .contentmob .iconmenu');
const body = document.querySelector('body');
const main = document.querySelector('main');
const navmob = document.querySelector('.navmob');

iconHamburger.addEventListener('click', (event) => {
  body.classList.add('disabledScroll');
  event.stopPropagation();
});

main.addEventListener('click', () => {
  navmob.classList.remove('open');
  body.classList.remove('disabledScroll');
});
