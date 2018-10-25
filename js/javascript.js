function stickyNav() {
  const nav = document.querySelector('#nav-bar');
  const logo = document.querySelector('#nav-logo');
  const logoImg = document.querySelector('#logo');
  const navTop = nav.offsetTop;

  console.log ('navTop = ' + navTop);
  console.log ('scrollY = ' + scrollY);

  if (window.scrollY > navTop) {
    nav.classList.add('sticky-nav');
    logo.classList.add('corner-logo');
    logoImg.src = 'images/home/logo-small.png';
  } else {
    nav.classList.remove('sticky-nav');
    logo.classList.remove('corner-logo');
    logoImg.src = 'images/home/logo-big.png';
  } 
}

window.addEventListener('scroll', stickyNav);