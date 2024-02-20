let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos && currentScrollPos > 0) {
    // Scrolling up, show the navigation bar
    document.querySelector('nav').classList.remove('nav-hidden');
  } else {
    // Scrolling down or at the top, hide the navigation bar
    document.querySelector('nav').classList.add('nav-hidden');
  }

  prevScrollPos = currentScrollPos;
};
  