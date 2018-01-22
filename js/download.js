/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
// SELECT ELEMENTS
var nav = document.querySelector('.done');
var button = document.querySelector('.donebutton');

// TOGGLE CLASS FUNCTION
var toggleNav = function () {
  console.log(1);
  nav.classList.toggle('show');
};

// ADD EVENT
button.addEventListener('click', toggleNav);


