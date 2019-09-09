// Main js file

// document.addEventListener('DOMContentLoaded', function() {
//     let elemSidenav = document.querySelectorAll('.sidenav');
//     let instancesSidenav = M.Sidenav.init(elemSidenav, {
//         edge: 'left',
//         draggable: true,
//         inDuration: 250,
//         outDuration: 200,
//         onOpenStart: null,
//         onOpenEnd: null,
//         onCloseStart: null,
//         onCloseEnd: null,
//         preventScrolling: true
//     });
//
//     let elemCarousel = document.querySelectorAll('.carousel');
//     let instancesCarousel = M.Carousel.init(elemCarousel, {
//         fullWidth: true,
//         indicators: true,
//         dragged: true
//     });
// });

import {ajax} from "./AJAX";

let form = document.getElementById('formID');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    ajax.post();
    this.reset();
});

let footerForm = document.getElementById('formID2');
footerForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    ajax.postFooterForm();
    this.reset();
});


