let noveltySlider = new Swiper('.top-nav', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".nav-next",
    prevEl: ".nav-prev",
  },

});


let homeSlider = new Swiper('.home-slider', {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 1200,
  loop: false,
  navigation: {
    nextEl: ".home-slider__next",
    prevEl: ".home-slider__prev",
  },
  pagination: {
    el: ".home-slider__pagination",
  },

});

