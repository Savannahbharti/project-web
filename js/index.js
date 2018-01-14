/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var section = document.getElementById('filter');
var button = document.getElementById("sortfilterbutton");
var show = function () {
    section.classList.toggle('sortfilteractive');
};
button.addEventListener('click', show);
section.setVisibility(button.INVISIBLE);