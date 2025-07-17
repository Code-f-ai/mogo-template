import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'slick-carousel';

export function initSlider(selecter = '.slider-container') {
  $(selecter).slick({
    arrows: true,
    dots: true, 
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
}