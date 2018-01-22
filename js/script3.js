/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var section = document.querySelector(".switch");
var button = document.querySelector(".downloadbutton");
var show = function () {
    section.classList.toggle("showDownload");
};
button.addEventListener('click', show);

