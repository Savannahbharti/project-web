/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var section = document.getElementById("popimg");
var button = document.getElementById("popupbutton");
var show = function () {
    section.classList.toggle("popupzien");
};
button.addEventListener('click', show);

