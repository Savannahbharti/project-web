/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var section = document.getElementById("downloadimg");
var button = document.getElementById("downloadbutton");
var show = function () {
    section.classList.toggle("downloadzien");
};
button.addEventListener('click', show);

