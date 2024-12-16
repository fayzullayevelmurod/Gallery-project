
// art-swiper
const artSwiper = new Swiper('.art-slider', {
  slidesPerView: 3.5,
  spaceBetween: 40,
  navigation: {
    nextEl: '.art-slider-next',
    prevEl: '.art-slider-prev',
  },
  speed: 700,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    700: {
      slidesPerView: 2.2,
    },
    900: {
      slidesPerView: 3.5,
    },
  },
  watchOverflow: false,
});

// art-slider-4
const artSwiper4 = new Swiper('.art-slider-4', {
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: '.art-slider-next',
    prevEl: '.art-slider-prev',
  },
  speed: 700,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    700: {
      slidesPerView: 2.2,
    },
    900: {
      slidesPerView: 3.5,
    },
  },
});

// big-art__swiper
const artSwiper2 = new Swiper('.art-swiper__2', {
  slidesPerView: 1.8,
  spaceBetween: 40,
  speed: 700,
  navigation: {
    nextEl: '.art-slider-next-2',
    prevEl: '.art-slider-prev-2',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 1.8,
    },
  },
});

// see-art__swiper
const seeArtSwiper = new Swiper('.see-art__swiper', {
  slidesPerView: 3.5,
  spaceBetween: 40,
  speed: 700,
  navigation: {
    nextEl: '.see-slider-next',
    prevEl: '.see-slider-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    700: {
      slidesPerView: 2.2,
    },
    900: {
      slidesPerView: 3.5,
    },
  },
});

// art-work__swiper
const artWorkSwiper = new Swiper('.art-work__swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 700,
  navigation: {
    nextEl: '.art-work-next',
    prevEl: '.art-work-prev',
  },
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',   // Paginatsiya elementi
    clickable: true,            // Kliklash imkoniyati
    dynamicBullets: true,       // Dinamik o‘lchamli tugmalar
  },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1.2,
  //   },
  //   700: {
  //     slidesPerView: 2.2,
  //   },
  //   900: {
  //     slidesPerView: 3.5,
  //   },
  // },
});

// gallery-slider
let gallerySwiper = new Swiper('.gallery-slider-2', {
  slidesPerView: 1.9,
  spaceBetween: 40,
  speed: 700,
  navigation: {
    nextEl: '.art-work-next',
    prevEl: '.art-work-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
    },
    700: {
      slidesPerView: 1.9,
    },
  },
});
window.addEventListener('load', () => {
  // Swiper tugmalarini topish
  const buttons = document.querySelectorAll('.swiper-button-prev, .swiper-button-next');

  buttons.forEach(button => {
    button.removeAttribute('disabled');

    button.classList.remove('swiper-button-lock');
  });
});
