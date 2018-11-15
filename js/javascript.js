function stickyNav() {
  const nav = document.querySelector('#nav-bar');
  const logo = document.querySelector('#nav-logo');
  const logoImg = document.querySelector('#logo');
  const navTop = nav.offsetTop;

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


//  -- NAVBAR FADING  --
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

  const nav = document.querySelector('#nav-bar');

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

    // Run the callback
    if (scrollY > 1) {
      nav.classList.add('fade');
    }

  }, 2000);
  
  nav.classList.remove('fade');

}, false);

//  --  END  -- NAVBAR FADING  --  END  --

function jumpToCorrectLocation() {
  window.scrollTo(0, 2);

  //calculate how far to about section and move to there

  //add onclick to navbuttons

}