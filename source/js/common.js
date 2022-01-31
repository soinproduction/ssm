let noveltySlider = new Swiper('.top-nav', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  // pagination: {
  //   el: ".novelty-dots",
  //   clickable: true,
  // },

  navigation: {
    nextEl: ".nav-next",
    prevEl: ".nav-prev",
  },

  // breakpoints: {
  //   577: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  //   // 992: {
  //   //   slidesPerView: 4,
  //   //   spaceBetween: 30,
  //   // },
  // }

});
