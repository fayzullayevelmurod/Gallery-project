// art-swiper
const artSwiper = new Swiper('.art-slider', {
  slidesPerView: 3.5,
  spaceBetween: 40,
  navigation: {
    nextEl: '.art-slider-next',
    prevEl: '.art-slider-prev',
  },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  // },
});
