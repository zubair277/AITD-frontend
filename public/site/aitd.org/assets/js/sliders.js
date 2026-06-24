
// Added to prevent Swiper runtime errors
window.initSwiperSafe = function(selector, options) {
    let el;
    if (typeof selector === 'string') {
        el = document.querySelector(selector);
    } else {
        el = selector;
    }
    if (!el) return null;
    let slides = el.querySelectorAll('.swiper-slide');
    if (!slides || slides.length === 0) return null;
    return new Swiper(el, options);
};

// home page event swiper

var swiper = window.initSwiperSafe(".menaSwipe", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".menaSwipe-next",
    prevEl: ".menaSwipe-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".ugcard1", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".ugcard1-next",
    prevEl: ".ugcard1-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true, // ✅ Feels more natural on touch
  resistanceRatio: 0.6, // ✅ Smoother resistance effect on edges
  touchStartPreventDefault: false, // ✅ Prevents over-blocking of touch
  speed: 800, // ✅ Global speed, a bit lower for fluid feel

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      freeMode: true,
      speed: 600,
      momentumRatio: 0.8, // ✅ Smooth glide
      touchStartPreventDefault: false,
    },

    768: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      freeMode: true,
      speed: 600,
      momentumRatio: 0.8,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper = window.initSwiperSafe(".ugcard2", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".ugcard2-next",
    prevEl: ".ugcard2-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true, // ✅ Feels more natural on touch
  resistanceRatio: 0.6, // ✅ Smoother resistance effect on edges
  touchStartPreventDefault: false, // ✅ Prevents over-blocking of touch
  speed: 800, // ✅ Global speed, a bit lower for fluid feel

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      freeMode: true,
      speed: 600,
      momentumRatio: 0.8, // ✅ Smooth glide
      touchStartPreventDefault: false,
    },

    768: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      freeMode: true,
      speed: 600,
      momentumRatio: 0.8,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});


var swiper = window.initSwiperSafe(".ugcard3", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".ugcard3-next",
    prevEl: ".ugcard3-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true, // ✅ Feels more natural on touch
  resistanceRatio: 0.6, // ✅ Smoother resistance effect on edges
  touchStartPreventDefault: false, // ✅ Prevents over-blocking of touch
  speed: 800, // ✅ Global speed, a bit lower for fluid feel

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      freeMode: true,
      speed: 600,
      momentumRatio: 0.8, // ✅ Smooth glide
      touchStartPreventDefault: false,
    },

    768: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      freeMode: true,
      speed: 600,
      momentumRatio: 0.8,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper160 = window.initSwiperSafe(".sharkSwiperWrapper", {
  slidesPerView: 3,
  centeredSlides: true,
  loopAdditionalSlides: 20,
  initialSlide: 1, // ✅ Start from 2nd slide
  speed: 800,
  loopFillGroupWithBlank: true,
  grabCursor: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,         // No tilt
    stretch: 0,
    depth: 100,        // 3D distance
    modifier: 1,
    slideShadows: false,
    scale: 1,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 40,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.2,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 4.3,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 4.3,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 4.3,
      centeredSlides: false,
      spaceBetween: 30,
    },
  },
});


var swiper = window.initSwiperSafe(".mastersScrolldsai", {
  // slidesPerView: "auto", // Adjusts dynamically
  centeredSlides: true, // Centers active slide
  spaceBetween: 20,
  loop: true, // Enables infinite loop
  speed: 300, // Smooth transition speed
  autoplay: {
    delay: 400, // Time before switching slides
    disableOnInteraction: false, // Keeps autoplay running even after interaction
    pauseOnMouseEnter: true, // Pauses autoplay when hovering
  },
  grabCursor: true, // Shows grabbing cursor
  navigation: {
    nextEl: ".mastersScrolldsai-next",
    prevEl: ".mastersScrolldsai-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".logoSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1500, // Time in ms before switching slides
    disableOnInteraction: false, // Keeps autoplay running even after user interaction
    pauseOnMouseEnter: true, // Pauses autoplay when hovering over the Swiper
  },
  navigation: {
    nextEl: ".logoSlider-next",
    prevEl: ".logoSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".newMeetMasterSwiper", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  freeMode: true,

  navigation: {
    nextEl: ".newMeetMasterSwiper-next",
    prevEl: ".newMeetMasterSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.3,
      freeMode: true,
      autoplay: false,
    },

    1024: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 4.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 4.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".newMeetMasterSwiper2", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  freeMode: true,

  navigation: {
    nextEl: ".newMeetMasterSwiper-next",
    prevEl: ".newMeetMasterSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.3,
      freeMode: true,
      autoplay: false,
    },

    1024: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 4.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 4.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var menaLandingswiper = window.initSwiperSafe(".menaLandingswiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: ".next-pointer",
    prevEl: ".prev-pointer",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper0 = window.initSwiperSafe(".homePageSwiper", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  speed: 400,
  effect: "fade", // Add this line to enable the fade effect
  fadeEffect: {
    crossFade: true, // Allows the transition between slides to fade smoothly
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".masterSwiper-Next",
    prevEl: ".masterSwiper-Prev",
  },
  autoplay: {
    delay: 400, // Time between transitions in milliseconds
    disableOnInteraction: false, // Autoplay will not stop after interactions
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: true,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".stylesSwiper", {
  slidesPerView: 1,
  speed: 400,
  freeMode: true,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".stylesSwiper-Next",
    prevEl: ".stylesSwiper-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      freeMode: true,
      speed: 400,
    },
    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: true,
      speed: 400,
    },
    1024: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".germanSwiper", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  spaceBetween: 80,
  speed: 400,
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  navigation: {
    nextEl: ".germanSwiper-Next",
    prevEl: ".germanSwiper-Prev",
  },

  autoplay: {
    delay: 2000, // Time between transitions in milliseconds
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 80,

    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
  },
});

var swiper0 = window.initSwiperSafe(".germanSwiperTbm", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  spaceBetween: 80,
  speed: 400,
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  navigation: {
    nextEl: ".germanSwiperTbm-Next",
    prevEl: ".germanSwiperTbm-Prev",
  },

  autoplay: {
    delay: 2000, // Time between transitions in milliseconds
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 80,

    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
  },
});

var swiper0 = window.initSwiperSafe(".germanSwiperTbmGlobal", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  spaceBetween: 80,
  speed: 400,
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  navigation: {
    nextEl: ".germanSwiperTbmGlobal-Next",
    prevEl: ".germanSwiperTbmGlobal-Prev",
  },

  autoplay: {
    delay: 2000, // Time between transitions in milliseconds
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 80,

    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 80,

    },
  },
});


var swiper0 = window.initSwiperSafe(".perspectiveSWiper", {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 20,
  loop: true,
  speed: 300,
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  navigation: {
    nextEl: ".perspectiveSWiper-Next",
    prevEl: ".perspectiveSWiper-Prev",
  },

  autoplay: {
    delay: 2500, // Time between transitions in milliseconds
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 300,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 300,
    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
  },
});


var swiper0 = window.initSwiperSafe(".swiperPodcast", {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 20,
  loop: true,
  speed: 300,
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  navigation: {
    nextEl: ".swiperPodcast-Next",
    prevEl: ".swiperPodcast-Prev",
  },

  autoplay: {
    delay: 2500, // Time between transitions in milliseconds
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 300,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 300,
    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".masterSwiper2", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  speed: 400,

  autoplay: {
    delay: 1200,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".masterSwiper2-Next",
    prevEl: ".masterSwiper2-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: true,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".swiperPodcast", {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 20,
  loop: true,
  speed: 300,
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  navigation: {
    nextEl: ".swiperPodcast-Next",
    prevEl: ".swiperPodcast-Prev",
  },

  autoplay: {
    delay: 2500, // Time between transitions in milliseconds
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 300,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 300,
    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".pgphome2", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  freeMode: true,
  speed: 400,
  navigation: {
    nextEl: ".pgphome2-Next",
    prevEl: ".pgphome2-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,

      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.6,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});
var swiper0 = window.initSwiperSafe(".pgphome", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  freeMode: true,
  speed: 400,
  navigation: {
    nextEl: ".pgphome-Next",
    prevEl: ".pgphome-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,

      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var menaSwiper1 = window.initSwiperSafe(".menaSlider1", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  freeMode: true,
  speed: 400,
  navigation: {
    nextEl: ".menaSlider1-Next",
    prevEl: ".menaSlider1-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,

      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.4,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.4,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var menaSwiper2 = window.initSwiperSafe(".menaSlider2", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  freeMode: true,
  speed: 400,
  navigation: {
    nextEl: ".menaSlider2-Next",
    prevEl: ".menaSlider2-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,

      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.4,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.4,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var menaSwiper3 = window.initSwiperSafe(".menaSlider3", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  freeMode: true,
  speed: 400,
  navigation: {
    nextEl: ".menaSlider3-Next",
    prevEl: ".menaSlider3-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,

      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.4,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.4,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".pgphome3", {
  slidesPerView: 2.4,
  spaceBetween: 20,
  speed: 400,
  navigation: {
    nextEl: ".pgphome3-Next",
    prevEl: ".pgphome3-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.6,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".studentLifeCampusSlider", {
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1200,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

var swiper0 = window.initSwiperSafe(".commonAreaWrap", {
  slidesPerView: 1,
  spaceBetween: 2,
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: true,
      speed: 300,
    },

    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1920: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".studentBusinessClub", {
  slidesPerView: 1.1,
  spaceBetween: 5,
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1200,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    1440: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1920: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

var swiper = window.initSwiperSafe(".eventSlider.events", {
  slidesPerView: 2.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".eventSlider-Next",
    prevEl: ".eventSlider-Prev",
  },
  breakpoints: {
    320: {
      // For screen widths >= 320px (mobile devices)
      slidesPerView: 1.2, // Show 2 slides per view
    },

    768: {
      // For screen widths >= 768px (tablet and above)
      slidesPerView: 1.4,
    },

    1024: {
      slidesPerView: 2.1,
    },

    1366: {
      slidesPerView: 2.1,
    },

    1440: {
      slidesPerView: 2.1,
    },

    1600: {
      slidesPerView: 2.1,
    },

    1920: {
      slidesPerView: 2.1,
    },
  },
});

var swiper = window.initSwiperSafe(".eventSlider.latestNews", {
  slidesPerView: 2.1,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".latestNews-Next",
    prevEl: ".latestNews-Prev",
  },
  breakpoints: {
    320: {
      // For screen widths >= 320px (mobile devices)
      slidesPerView: 1.2, // Show 2 slides per view
    },

    768: {
      // For screen widths >= 768px (tablet and above)
      slidesPerView: 1.4,
    },

    1024: {
      slidesPerView: 2.1,
    },

    1366: {
      slidesPerView: 2.1,
    },

    1440: {
      slidesPerView: 2.1,
    },

    1600: {
      slidesPerView: 2.1,
    },

    1920: {
      slidesPerView: 2.1,
    },
  },
});

var swiper = window.initSwiperSafe(".eventSlider.admissions", {
  slidesPerView: 2.1,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".admissions-Next",
    prevEl: ".admissions-Prev",
  },
  breakpoints: {
    320: {
      // For screen widths >= 320px (mobile devices)
      slidesPerView: 1.2, // Show 2 slides per view
    },

    768: {
      // For screen widths >= 768px (tablet and above)
      slidesPerView: 1.4,
    },

    1024: {
      slidesPerView: 2.1,
    },

    1366: {
      slidesPerView: 2.1,
    },

    1440: {
      slidesPerView: 2.1,
    },

    1600: {
      slidesPerView: 2.1,
    },

    1920: {
      slidesPerView: 2.1,
    },
  },
});

var swiper1 = window.initSwiperSafe(".alumniSpotlight", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: false,
  loop: false,
  speed: 0,
  allowTouchMove: false, // 👈 THIS disables dragging/swiping

  navigation: {
    nextEl: ".alumniSpotlight-Next",
    prevEl: ".alumniSpotlight-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      speed: 400,
      allowTouchMove: false, // 👈 Add this inside each breakpoint too
    },
    680: {
      slidesPerView: 1.2,
      freeMode: false,
      autoplay: false,
      speed: 400,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      speed: 400,
      allowTouchMove: false,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});

var swiper1 = window.initSwiperSafe(".internshipSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: false,
  loop: false,
  speed: 0,
  allowTouchMove: false, // 👈 THIS disables dragging/swiping

  navigation: {
    nextEl: ".internshipSwiper-Next",
    prevEl: ".internshipSwiper-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false, // 👈 Add this inside each breakpoint too
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 1.2,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});

var swiper1 = window.initSwiperSafe(".internshipSwiperClassPsm", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: false,
  loop: false,
  speed: 0,
  allowTouchMove: false, // 👈 THIS disables dragging/swiping

  navigation: {
    nextEl: ".internshipSwiperClassPsm-Next",
    prevEl: ".internshipSwiperClassPsm-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false, // 👈 Add this inside each breakpoint too
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 1.2,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});

var swiper1 = window.initSwiperSafe(".internshipSwiperClassCareer", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: false,
  loop: false,
  speed: 0,
  allowTouchMove: false, // 👈 THIS disables dragging/swiping

  navigation: {
    nextEl: ".internshipSwiperClassCareer-Next",
    prevEl: ".internshipSwiperClassCareer-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false, // 👈 Add this inside each breakpoint too
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 1.2,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});



var swiper1 = window.initSwiperSafe(".internshipSwiperTbm", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: false,
  loop: false,
  speed: 0,
  allowTouchMove: false, // 👈 THIS disables dragging/swiping

  navigation: {
    nextEl: ".internshipSwiperTbm-Next",
    prevEl: ".internshipSwiperTbm-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false, // 👈 Add this inside each breakpoint too
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 1.2,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});



var swiper01 = window.initSwiperSafe(".internshipSwiperClass", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: false,
  loop: false,
  speed: 0,
  allowTouchMove: false, // 👈 THIS disables dragging/swiping

  navigation: {
    nextEl: ".internshipSwiperClass-Next",
    prevEl: ".internshipSwiperClass-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false, // 👈 Add this inside each breakpoint too
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 1.2,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});

var swiper = window.initSwiperSafe(".internshipSwiperClass3", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: false,
  loop: false,
  speed: 0,
  allowTouchMove: false, // 👈 THIS disables dragging/swiping

  navigation: {
    nextEl: ".internshipSwiperClass3-Next",
    prevEl: ".internshipSwiperClass3-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false, // 👈 Add this inside each breakpoint too
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 1.2,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      allowTouchMove: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});

var swiper1 = window.initSwiperSafe(".alumniSpotlight2", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  freeMode: false,
  loop: false,
  speed: 300,
  allowTouchMove: false, // 👈 THIS disables dragging/swiping

  navigation: {
    nextEl: ".alumniSpotlight2-Next",
    prevEl: ".alumniSpotlight2-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      speed: 400,
      allowTouchMove: false, // 👈 Add this inside each breakpoint too
    },
    680: {
      slidesPerView: 1.2,
      freeMode: false,
      autoplay: false,
      speed: 400,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoplay: false,
      speed: 400,
      allowTouchMove: false,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
  },
});

var swiper2 = window.initSwiperSafe(".alumniSpotlightIntersect", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  fadeEffect: {
    // added
    crossFade: true, // added(resolve the overlapping of the slides)
  }, // added
  freeMode: true,
  loop: false,
  speed: 300,
  navigation: {
    nextEl: ".alumniSpotlightIntersect-Next",
    prevEl: ".alumniSpotlightIntersect-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      draggable: true,
      autoplay: false,
      speed: 400,
    },

    680: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper1 = window.initSwiperSafe(".intheNewsSlider", {
  slidesPerView: 1,
  spaceBetween: 24,
  freeMode: true,
  loop: false,
  speed: 300,
  navigation: {
    nextEl: ".intheNewsSlider-Next",
    prevEl: ".intheNewsSlider-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      draggable: true,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});


var swiper2 = window.initSwiperSafe(".studenteventslide", {
  slidesPerView: 1.2,
  spaceBetween: 25,
  parallax: false,
  loop: false,
  speed: 400,
  freeMode: false,
  navigation: {
    nextEl: ".studenteventslide-Next",
    prevEl: ".studenteventslide-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.7,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper3 = window.initSwiperSafe(".innovationSlider", {
  slidesPerView: 3,
  spaceBetween: 25,
  parallax: false,
  loop: false,
  speed: 400,
  freeMode: false,
  navigation: {
    nextEl: ".innovationSlider-Next",
    prevEl: ".innovationSlider-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 2.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper4 = window.initSwiperSafe(".innovationSlider2", {
  slidesPerView: 3,
  spaceBetween: 25,
  parallax: false,
  loop: false,
  speed: 400,
  freeMode: false,
  navigation: {
    nextEl: ".innovationSlider2-Next",
    prevEl: ".innovationSlider2-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});



var swiper5 = window.initSwiperSafe(".redefine-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".redefine-next",
    prevEl: ".redefine-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper6 = window.initSwiperSafe(".storyswiper", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 300,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper-next",
    prevEl: ".storyswiper-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper7 = window.initSwiperSafe(".storyswiper1", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper1-next",
    prevEl: ".storyswiper1-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var storyswiper1a = window.initSwiperSafe(".storyswiper1a", {
  // slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper1a-next",
    prevEl: ".storyswiper1a-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var storyswiper1b = window.initSwiperSafe(".storyswiper1b", {
  // slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper1b-next",
    prevEl: ".storyswiper1b-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var globalSwiper1 = window.initSwiperSafe(".globalSwiper1", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".globalSwiper1-next",
    prevEl: ".globalSwiper1-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    400: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var tbmFbmSwiper = window.initSwiperSafe(".tbmFbmSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".tbmFbmSwiper-next",
    prevEl: ".tbmFbmSwiper-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    400: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var tbmFbmSwiper2new = window.initSwiperSafe(".tbmFbmSwiper2new", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".tbmFbmSwiper2new-next",
    prevEl: ".tbmFbmSwiper2new-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    400: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper22 = window.initSwiperSafe(".panelistIntersect", {
  slidesPerView: 1.3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".panelistIntersect-next",
    prevEl: ".panelistIntersect-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2.9,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper8 = window.initSwiperSafe(".storyswiper2", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper2-next",
    prevEl: ".storyswiper2-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.9,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper9 = window.initSwiperSafe(".storyswiper3", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper3-next",
    prevEl: ".storyswiper3-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper10 = window.initSwiperSafe(".storyswiper4", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper4-next",
    prevEl: ".storyswiper4-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper11 = window.initSwiperSafe(".storyswiper5", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper5-next",
    prevEl: ".storyswiper5-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper12 = window.initSwiperSafe(".storyswiper6", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".storyswiper6-next",
    prevEl: ".storyswiper6-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper14 = window.initSwiperSafe(".hrinsight", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".hrinsight-next",
    prevEl: ".hrinsight-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

// center swiper home

var swiper15 = window.initSwiperSafe(".cohortswiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,

  navigation: {
    nextEl: ".s-next",
    prevEl: ".s-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});





var swiper20 = window.initSwiperSafe(".unfoldSwiper", {
  slidesPerView: 2.4,
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".unfoldSwiper-next",
    prevEl: ".unfoldSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper20 = window.initSwiperSafe(".networkingParent", {
  slidesPerView: 2.4,
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 1,

  breakpoints: {
    0: {
      slidesPerView: 1.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper21 = window.initSwiperSafe(".dropshippingSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 280,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".dropshippingSwiper-next",
    prevEl: ".dropshippingSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper22 = window.initSwiperSafe(".mobSwiper", {
  slidesPerView: 1.3,
  spaceBetween: 60,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".mobSwiper-next",
    prevEl: ".mobSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 3.1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper23 = window.initSwiperSafe(".spotlightSwiper", {
  slidesPerView: 3.1,
  spaceBetween: 60,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".spotlightSwiper-next",
    prevEl: ".spotlightSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 3.1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper24 = window.initSwiperSafe(".hrSwiper", {
  slidesPerView: 2.3,
  spaceBetween: 60,
  //centeredSlides: true,
  //initialSlide: 1,
  navigation: {
    nextEl: ".hrSwiper-next",
    prevEl: ".hrSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 2.3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper26 = window.initSwiperSafe(".unwindInteraction", {
  slidesPerView: 1,
  spaceBetween: 20,
  //centeredSlides: true,
  //initialSlide: 1,
  navigation: {
    nextEl: ".unwindInteraction-next",
    prevEl: ".unwindInteraction-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.8,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.3,
    },
  },
});

var swiper27 = window.initSwiperSafe(".studentSlide", {
  slidesPerView: 1,
  spaceBetween: 60,
  centeredSlides: true,
  // initialSlide: 1,
  navigation: {
    nextEl: ".studentSlide-Next",
    prevEl: ".studentSlide-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper28 = window.initSwiperSafe(".sucessstory", {
  slidesPerView: 1,
  freeMode: true,

  spaceBetween: 60,
  navigation: {
    nextEl: ".sucessstory-Next",
    prevEl: ".sucessstory-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper29 = window.initSwiperSafe(".elevateskill", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".elevateskill-Next",
    prevEl: ".elevateskill-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: false,
      speed: 500,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      speed: 500,
    },
    1024: {
      slidesPerView: 3.5,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

var swiper30 = window.initSwiperSafe(".facultyresearch", {
  slidesPerView: 1,
  spaceBetween: 60,
  freeMode: true,
  navigation: {
    nextEl: ".facultyresearch-Next",
    prevEl: ".facultyresearch-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.5,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});

var swiper31 = window.initSwiperSafe(".demodaySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".demodaySwiper-Next",
    prevEl: ".demodaySwiper-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper32 = window.initSwiperSafe(".eventheld", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld-Next",
    prevEl: ".eventheld-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 2.7,
    },
  },
});

var swiper25 = window.initSwiperSafe(".eventheld1", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld1-Next",
    prevEl: ".eventheld1-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper35 = window.initSwiperSafe(".eventheld2", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld2-Next",
    prevEl: ".eventheld2-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper36 = window.initSwiperSafe(".eventheld3", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld3-Next",
    prevEl: ".eventheld3-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper37 = window.initSwiperSafe(".eventheld4", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld4-Next",
    prevEl: ".eventheld4-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper38 = window.initSwiperSafe(".eventheld5", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld5-Next",
    prevEl: ".eventheld5-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper39 = window.initSwiperSafe(".eventheld6", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld6-Next",
    prevEl: ".eventheld6-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper40 = window.initSwiperSafe(".eventheld7", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld7-Next",
    prevEl: ".eventheld7-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld8", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld8-Next",
    prevEl: ".eventheld8-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld9", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld9-Next",
    prevEl: ".eventheld9-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld10", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld10-Next",
    prevEl: ".eventheld10-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld11", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld11-Next",
    prevEl: ".eventheld11-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld12", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld12-Next",
    prevEl: ".eventheld12-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld13", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld13-Next",
    prevEl: ".eventheld13-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper40 = window.initSwiperSafe(".eventheld14", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld14-Next",
    prevEl: ".eventheld14-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld15", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld15-Next",
    prevEl: ".eventheld15-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld16", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld16-Next",
    prevEl: ".eventheld16-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld17", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld17-Next",
    prevEl: ".eventheld17-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld18", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld18-Next",
    prevEl: ".eventheld18-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld19", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld19-Next",
    prevEl: ".eventheld19-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld20", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld20-Next",
    prevEl: ".eventheld20-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld21", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld21-Next",
    prevEl: ".eventheld21-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld22", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld22-Next",
    prevEl: ".eventheld22-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld23", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld23-Next",
    prevEl: ".eventheld23-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper40 = window.initSwiperSafe(".eventheld24", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".eventheld24-Next",
    prevEl: ".eventheld24-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var uniwnd = window.initSwiperSafe(".unwind", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".unwind-Next",
    prevEl: ".unwind-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.4,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.4,
    },
  },
});

var uniwnd = window.initSwiperSafe(".unwind2", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".unwind2-Next",
    prevEl: ".unwind2-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3,
    },
  },
});

var uniwnd = window.initSwiperSafe(".unwind1", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".unwind1-Next",
    prevEl: ".unwind1-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.2,
    },
  },
});

var swiper33 = window.initSwiperSafe(".fununfold", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".fununfold-Next",
    prevEl: ".fununfold-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 3.4,
    },
  },
});

var swiper34 = window.initSwiperSafe(".centeredSwiper5", {
  slidesPerView: 1,
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: ".centeredSwiper5-Next",
    prevEl: ".centeredSwiper5-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".newsSlide2", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".newsSlide2-next",
    prevEl: ".newsSlide2-prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".curriculumdsai", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".curriculumdsai-next",
    prevEl: ".curriculumdsai-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 200,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 200,
    },

    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});


var swiper = window.initSwiperSafe(".highlightdsai", {
  slidesPerView: 2.5,
  spaceBetween: 15,

  navigation: {
    nextEl: ".highlightdsai-next",
    prevEl: ".highlightdsai-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 500,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 500,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1600: {
      slidesPerView: 3,
      freeMode: false,
    },
  },
});

var highlightdsai2 = window.initSwiperSafe(".highlightdsai2", {
  slidesPerView: 2.5,
  spaceBetween: 15,

  navigation: {
    nextEl: ".highlightdsai2-next",
    prevEl: ".highlightdsai2-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 500,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 500,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1600: {
      slidesPerView: 3,
      freeMode: false,
    },
  },
});

var swiper = window.initSwiperSafe(".intersectFiveSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".intersectFiveSwiper-next",
    prevEl: ".intersectFiveSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 500,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 500,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper1 = window.initSwiperSafe(".voiceSwiper1", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".voiceSwiper1-next",
    prevEl: ".voiceSwiper1-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper2 = window.initSwiperSafe(".voiceSwiper2", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".voiceSwiper2-next",
    prevEl: ".voiceSwiper2-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".intersectEventSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".intersectEventSwiper-next",
    prevEl: ".intersectEventSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 2.2,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 2.2,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 2.2,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 2.2,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".techIndustryImmersion", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".techIndustryImmersion-next",
    prevEl: ".techIndustryImmersion-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var corpSlider = window.initSwiperSafe(".psy-corporateSlider", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".psy-corporateSlider-next",
    prevEl: ".psy-corporateSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".weekendSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,

  navigation: {
    nextEl: ".weekendSwiper-next",
    prevEl: ".weekendSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".LeaderSliderSummerSkill", {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".LeaderSlider-next",
    prevEl: ".LeaderSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});



var swiper = window.initSwiperSafe(".nextGenSlider", {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".nextGenSlider-next",
    prevEl: ".nextGenSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".LeaderSlider", {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".LeaderSlider-next",
    prevEl: ".LeaderSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

// var swiper = window.initSwiperSafe(".LeaderSliderMentors", {
//   slidesPerView: 5,
//   spaceBetween: 20,

//   navigation: {
//     nextEl: ".LeaderSliderMentors-next",
//     prevEl: ".LeaderSliderMentors-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1.5,
//       freeMode: true,
//       autoplay: false,
//       speed: 400,
//       spaceBetween: 20,
//     },

//     768: {
//       slidesPerView: 1.8,
//       freeMode: true,
//       autoplay: false,
//       speed: 400,
//     },
//     1024: {
//       slidesPerView: 3,
//       freeMode: false,
//       slidesPerGroup: 1,
//     },
//     1366: {
//       slidesPerView: 4,
//       freeMode: false,
//       slidesPerGroup: 1,
//       spaceBetween: 20,
//     },
//     1440: {
//       slidesPerView: 5,
//       freeMode: false,
//       slidesPerGroup: 1,
//       spaceBetween: 20,
//     },
//     1600: {
//       slidesPerView: 5,
//       freeMode: false,
//       spaceBetween: 20,
//     },
//   },
// });

var swipermena = window.initSwiperSafe(".LeaderSliderMenaLanding", {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".LeaderSliderMenaLanding-next",
    prevEl: ".LeaderSliderMenaLanding-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".LeaderstudentSlider", {
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    nextEl: ".LeaderstudentSlider-next",
    prevEl: ".LeaderstudentSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper = window.initSwiperSafe(".summerWeekSlider", {
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    nextEl: ".summerWeekSlider-next",
    prevEl: ".summerWeekSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.4,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});



var swiper = window.initSwiperSafe(".psyAlmuniSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".psyAlmuniSwiper-next",
    prevEl: ".psyAlmuniSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".newsSlide3", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".newsSlide3-next",
    prevEl: ".newsSlide3-prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".historicSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  loop: true,                // infinite loop ON
  allowSlidePrev: false,     // disable left movement (only right direction)

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".historicSwiper-next",
    prevEl: ".historicSwiper-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 1,
      freeMode: true,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".historicSwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,

  loop: true,                // infinite loop ON
  allowSlidePrev: false,     // disable left movement (only right direction)

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".historicSwiper2-next",
    prevEl: ".historicSwiper2-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 1,
      freeMode: true,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".historicSwiper3", {
  slidesPerView: 1,
  spaceBetween: 20,

  loop: true,                // infinite loop ON
  allowSlidePrev: false,     // disable left movement (only right direction)

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".historicSwiper3-next",
    prevEl: ".historicSwiper3-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 1,
      freeMode: true,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".newslide5", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".newslide5-next",
    prevEl: ".newslide5-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".newsSlide6", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".newsSlide6-next",
    prevEl: ".newsSlide6-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".newsSlide7", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".newsSlide7-next",
    prevEl: ".newsSlide7-prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".newsSlide8", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".newsSlide8-next",
    prevEl: ".newsSlide8-prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});



var swiper = window.initSwiperSafe(".mastersScrollTbm", {
  slidesPerView: "auto", // Adjusts dynamically
  // centeredSlides: true, // Centers active slide
  spaceBetween: 20,
  loop: true, // Enables infinite loop
  autoplay: {
    delay: 1500, // Time before switching slides
    disableOnInteraction: false, // Keeps autoplay running even after interaction
    // pauseOnMouseEnter: true, // Pauses autoplay when hovering
  },
  grabCursor: true, // Shows grabbing cursor
  navigation: {
    nextEl: ".mastersScrollTbm-next",
    prevEl: ".mastersScrollTbm-prev",
  },
  freeMode: true, // Enables free mode for smooth scrolling
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 15,
      autoplay: false,
      loop: false,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
      autoplay: false,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4.7,
      spaceBetween: 20,
    },

    1920: {
      slidesPerView: 4.8,
      spaceBetween: 20,
    },
  },
});

var swiperM = window.initSwiperSafe(".mastersScrollCurriculum", {
  slidesPerView: "auto", // Adjusts dynamically
  // centeredSlides: true, // Centers active slide
  spaceBetween: 20,
  loop: true, // Enables infinite loop
  autoplay: {
    delay: 400, // Time before switching slides
    disableOnInteraction: false, // Keeps autoplay running even after interaction
    // pauseOnMouseEnter: true, // Pauses autoplay when hovering
  },
  grabCursor: true, // Shows grabbing cursor
  navigation: {
    nextEl: ".mastersScrollCurriculum-next",
    prevEl: ".mastersScrollCurriculum-prev",
  },
  freeMode: true, // Enables free mode for smooth scrolling
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 15,
      autoplay: false,
      loop: false,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
      autoplay: false,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4.7,
      spaceBetween: 20,
    },

    1920: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// temperory slider
var experienceMasterSlider = window.initSwiperSafe(".itTheNews", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  navigation: {
    nextEl: ".itTheNews-Next",
    prevEl: ".itTheNews-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var singleEvSlider = window.initSwiperSafe(".highlight-swiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: false,
  // mousewheel: true,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".highlight-swiper-Next",
    prevEl: ".highlight-swiper-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3.2,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var singleEvSlider = window.initSwiperSafe(".highlight-swiper1", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: false,
  parallax: true,
  loop: false,
  // mousewheel: true,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".highlight-swiper1-Next",
    prevEl: ".highlight-swiper1-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var singleEvSlider = window.initSwiperSafe(".researchSwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: false,
  parallax: true,
  loop: false,
  // mousewheel: true,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".highlight-swiper1-Next",
    prevEl: ".highlight-swiper1-Prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.4,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

// temperory slider end

// HSSL Event Slider Start

var highSchoolSlider = window.initSwiperSafe(".highSchoolSlider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 500,
  navigation: {
    nextEl: ".highSchoolSlider-next",
    prevEl: ".highSchoolSlider-prev",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var highSchoolPreviousSlider = window.initSwiperSafe(".highSchoolPreviousSlider", {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: false,
  // mousewheel: true,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".highSchoolPreviousSlider-next",
    prevEl: ".highSchoolPreviousSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 4.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var StudentProfileSwiper = window.initSwiperSafe(".StudentProfileSwiper", {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: false,
  // mousewheel: true,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".StudentProfileSwiper-next",
    prevEl: ".StudentProfileSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

// HSSL Event Slider End

var swiper = window.initSwiperSafe(".newslide1", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".newslide1-next",
    prevEl: ".newslide1-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper = window.initSwiperSafe(".newslide2", {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".newslide2-next",
    prevEl: ".newslide2-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.6,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.6,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

// Challenges Page Sliders Start

var DropshippingSlider = window.initSwiperSafe(".DropshippingSlider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".DropshippingSlider-next",
    prevEl: ".DropshippingSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var ronitSwiper = window.initSwiperSafe(".ronitSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".ronitSwiper-next",
    prevEl: ".ronitSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var studentChallengeSwiper = window.initSwiperSafe(".studentChallengeSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".studentChallengeSwiper-next",
    prevEl: ".studentChallengeSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var madhusSwiper = window.initSwiperSafe(".madhusSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".madhusSwiper-next",
    prevEl: ".madhusSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var arialSwiper = window.initSwiperSafe(".arialSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".arialSwiper-next",
    prevEl: ".arialSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var ContentcreatorSlider = window.initSwiperSafe(".challengeSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  parallax: true,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 2000,
  freeMode: true,
  navigation: {
    nextEl: ".challengeSwiper-next",
    prevEl: ".challengeSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var rajikSwiper = window.initSwiperSafe(".rajikSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  parallax: true,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 2000,
  freeMode: true,
  navigation: {
    nextEl: ".rajikSwiper-next",
    prevEl: ".rajikSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var wildConsulting = window.initSwiperSafe(".wildConsulting", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  parallax: true,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 2000,
  freeMode: true,
  navigation: {
    nextEl: ".wildConsulting-next",
    prevEl: ".wildConsulting-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var ventureProgram = window.initSwiperSafe(".ventureProgram", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  parallax: true,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 2000,
  freeMode: true,
  navigation: {
    nextEl: ".ventureProgram-next",
    prevEl: ".ventureProgram-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      speed: 500,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      speed: 500,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      speed: 500,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      freeMode: false,
    },
  },
});

var insta_slider = window.initSwiperSafe(".insta_slider", {
  slidesPerView: 4,
  spaceBetween: 120,
  loop: false,
  parallax: true,
  loop: false,
  freeMode: true,
  mousewheel: false,
  speed: 2000,
  freeMode: true,
  navigation: {
    nextEl: ".insta_slider-next",
    prevEl: ".insta_slider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      speed: 500,
      spaceBetween: 10,
      freeMode: true,
    },
    400: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      speed: 500,
      freeMode: true,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      freeMode: true,
      loop: true,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      speed: 500,
      freeMode: true,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 2,
      freeMode: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 2,
      freeMode: false,
    },
  },
});

// Challenges Page Sliders End

var corpSlider = window.initSwiperSafe(".psy-corporateSlider", {
  slidesPerView: 2.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".psy-corporateSlider-next",
    prevEl: ".psy-corporateSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var shareEventSlider = window.initSwiperSafe(".shareEventSlider", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
  // mousewheel: true,
  speed: 400,
  freeMode: true,

  breakpoints: {
    0: {
      slidesPerView: 4.4,
      slidesPerGroup: 1,
      freeMode: true,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 4.4,
      slidesPerGroup: 1,
      freeMode: true,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4.4,
      slidesPerGroup: 1,
      freeMode: true,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4.1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    1366: {
      slidesPerView: 4.4,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
});

var swiper = window.initSwiperSafe(".sneakPeakSwiperSlider", {
  slidesPerView: 1.3,
  spaceBetween: 20,
  loop: false,
  speed: 400,
  freeMode: true,

  navigation: {
    nextEl: ".sneakPeak-next",
    prevEl: ".sneakPeak-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      freeMode: true,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      freeMode: true,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4.1,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    1366: {
      slidesPerView: 4.4,
      freeMode: true,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
  },
});

var swiper = window.initSwiperSafe(".swiperSpeakersNew", {
  slidesPerView: 1.2,
  loop: false,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,

  navigation: {
    nextEl: ".sneakSpeaker-next",
    prevEl: ".sneakSpeaker-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      freeMode: true,
    },

    768: {
      slidesPerView: 2.2,
      slidesPerGroup: 1,
      freeMode: true,
    },
    1024: {
      slidesPerView: 3,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 5,
      freeMode: true,
      slidesPerGroup: 1,
    },
  },
});

//  get prepped swiper

var swiper = window.initSwiperSafe(".consultSlider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".consultSlider-Next",
    prevEl: ".consultSlider-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".productSlider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".productSlider-Next",
    prevEl: ".productSlider-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".uginthenews", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".uginthenews-Next",
    prevEl: ".uginthenews-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});


var swiper = window.initSwiperSafe(".uginthenewsDsai", {
  slidesPerView: 1.2,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
    nextEl: ".uginthenewsDsai-Next",
    prevEl: ".uginthenewsDsai-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.8,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3.5,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".insightSwiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".insightSwiper-Next",
    prevEl: ".insightSwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiper1", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiper1-Next",
    prevEl: ".outclassSwiper1-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiper2", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiper2-Next",
    prevEl: ".outclassSwiper2-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiper3", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiper3-Next",
    prevEl: ".outclassSwiper3-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiper4", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiper4-Next",
    prevEl: ".outclassSwiper4-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiperTbm1", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperTbm1-Next",
    prevEl: ".outclassSwiperTbm1-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiperTbm2", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperTbm2-Next",
    prevEl: ".outclassSwiperTbm2-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiperTbm3", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperTbm3-Next",
    prevEl: ".outclassSwiperTbm3-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiperTbm4", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperTbm4-Next",
    prevEl: ".outclassSwiperTbm4-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 2,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiperGlobalTbm4", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperGlobalTbm4-Next",
    prevEl: ".outclassSwiperGlobalTbm4-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiperPsm1", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperPsm1-Next",
    prevEl: ".outclassSwiperPsm1-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});



var swiper = window.initSwiperSafe(".outclassSwiperPsm2", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperPsm2-Next",
    prevEl: ".outclassSwiperPsm2-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiperPsm3", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperPsm3-Next",
    prevEl: ".outclassSwiperPsm3-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".outclassSwiperPsm4", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".outclassSwiperPsm4-Next",
    prevEl: ".outclassSwiperPsm4-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".ourProgramSwiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".ourProgramSwiper-Next",
    prevEl: ".ourProgramSwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 2.3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".ourProgramTbmSwiper", {
  spaceBetween: 16,
  navigation: {
    nextEl: ".ourProgramTbmSwiper-Next",
    prevEl: ".ourProgramTbmSwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 2.3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".studentStoryTBm", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".studentStoryTBm-Next",
    prevEl: ".studentStoryTBm-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".studentStoryPsm", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".studentStoryPsm-Next",
    prevEl: ".studentStoryPsm-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});



var swiper = window.initSwiperSafe(".insightSwiperCurriculum", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".insightSwiperCurriculum-Next",
    prevEl: ".insightSwiperCurriculum-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".insightSwipertbmCurriculum ", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".insightSwipertbmCurriculum-Next",
    prevEl: ".insightSwipertbmCurriculum-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".insightSwipertbm", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".insightSwipertbm-Next",
    prevEl: ".insightSwipertbm-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 1500,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});




var swiper = window.initSwiperSafe(".tbmFacultySwiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".tbmFacultySwiper-Next",
    prevEl: ".tbmFacultySwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".smgFacultySwiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".smgFacultySwiper-Next",
    prevEl: ".smgFacultySwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".hrosFacultySwiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".hrosFacultySwiper-Next",
    prevEl: ".hrosFacultySwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".hrOsSwiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".hrOsSwiper-Next",
    prevEl: ".hrOsSwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".globalFinanceSwiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".globalFinanceSwiper-Next",
    prevEl: ".globalFinanceSwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});


var swiper = window.initSwiperSafe(".tbmFacultySwiperPgp", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".tbmFacultySwiperPgp-Next",
    prevEl: ".tbmFacultySwiperPgp-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".tbmFacultyGlobalSwiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".tbmFacultyGlobalSwiper-Next",
    prevEl: ".tbmFacultyGlobalSwiper-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".insightSwiperAdmission", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".insightSwiperAdmission-Next",
    prevEl: ".insightSwiperAdmission-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0.1: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});



var swiper = window.initSwiperSafe(".insightSwiperClass", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".insightSwiperClass-Next",
    prevEl: ".insightSwiperClass-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".insightSwiperClassTbm", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".insightSwiperClassTbm-Next",
    prevEl: ".insightSwiperClassTbm-Prev",
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});
var swiper = window.initSwiperSafe(".hearFromAlumni", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,

  navigation: {
    nextEl: ".hearFromAlumni-next",
    prevEl: ".hearFromAlumni-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".marketingSlider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".marketingSlider-Next",
    prevEl: ".marketingSlider-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".financeSlider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".financeSlider-Next",
    prevEl: ".financeSlider-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".homeDsaiSlider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".homeDsaiSlider-Next",
    prevEl: ".homeDsaiSlider-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".teachingSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".vhomeAlumniSwiper-Next",
    prevEl: ".vhomeAlumniSwiper-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3.1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".vAlumniSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".vAlumniSwiper-Next",
    prevEl: ".vAlumniSwiper-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3.1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".intersectLeaderSlider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: false,
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.8,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 12,
    },
    1440: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 12,
    },
    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 12,
    },
  },
});

var swiper = window.initSwiperSafe(".teachingSwiper1", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".teachingBtn-Next",
    prevEl: ".teachingBtn-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3.1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper8 = window.initSwiperSafe(".experienceWorld", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".experienceWorld-next",
    prevEl: ".experienceWorld-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var swiper8 = window.initSwiperSafe(".mentorsTest", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".mentorsTest-next",
    prevEl: ".mentorsTest-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    768: {
      slidesPerView: 2.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var tracksSimulationSwiper = window.initSwiperSafe(".tracksSimulationSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 400,
  navigation: {
    nextEl: ".tracksSimulationSwiper-next",
    prevEl: ".tracksSimulationSwiper-prev",
  },
  pagination: {
    el: ".tracksSimulationSwiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.1,
      freeMode: true,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".skillSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".skillSlider-next",
    prevEl: ".skillSlider-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".businessesBuilt", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".businessesBuilt-next",
    prevEl: ".businessesBuilt-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 4,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});

var businesSlider = window.initSwiperSafe(".businesSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 400,
  freeMode: true,
  navigation: {
    nextEl: ".businesSlider-next",
    prevEl: ".businesSlider-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 2.1,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
  },
});



var swiper0 = window.initSwiperSafe(".sharkTank", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  // speed: 400,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  navigation: {
    nextEl: ".sharkTank-Next",
    prevEl: ".sharkTank-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 4,
      freeMode: true,
      slidesPerGroup: 4,
    },

    1440: {
      slidesPerView: 4,
      freeMode: true,
      slidesPerGroup: 4,
    },
    1600: {
      slidesPerView: 4,
      freeMode: true,
      slidesPerGroup: 4,
    },
    1920: {
      slidesPerView: 4,
      freeMode: true,
      slidesPerGroup: 4,
    },
  },
});

var swiper0 = window.initSwiperSafe(".masterSwiper12", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  // speed: 400,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination", // Add this line to specify the pagination element
    clickable: true, // Allow the pagination bullets to be clickable
  },
  navigation: {
    nextEl: ".masterSwiper-Next",
    prevEl: ".masterSwiper-Prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      speed: 400,
    },

    768: {
      slidesPerView: 1.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1920: {
      slidesPerView: 1,
      freeMode: true,
      slidesPerGroup: 1,
    },
  },
});

var swiper0 = window.initSwiperSafe(".outClassSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  // speed: 400,

  navigation: {
    nextEl: ".masterSwiper-Next",
    prevEl: ".masterSwiper-Prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 2.1,
      freeMode: true,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: true,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 3.5,
      freeMode: true,
      slidesPerGroup: 1,
    },
  },
});

var swiper = window.initSwiperSafe(".industryTechSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".industrySwiper-Next",
    prevEl: ".industrySwiper-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 2.5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".logoSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = window.initSwiperSafe(".mastersScrollPgp", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 400,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});



var swiper = window.initSwiperSafe(".roadMapSwiper", {
  slidesPerView: 1.4,
  spaceBetween: 10,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.2,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".studentAlumniSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".studentAlumniSwiper-Next",
    prevEl: ".studentAlumniSwiper-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3.1,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".phyMastersScroll", {
  slidesPerView: "auto", // Adjusts dynamically

  spaceBetween: 20,
  loop: true, // Enables infinite loop
  speed: 300, // Smooth transition speed
  autoplay: {
    delay: 400, // Time before switching slides
    disableOnInteraction: false, // Keeps autoplay running even after interaction
    // pauseOnMouseEnter: true, // Pauses autoplay when hovering
  },
  grabCursor: true, // Shows grabbing cursor
  navigation: {
    nextEl: ".phyMastersScroll-next",
    prevEl: ".phyMastersScroll-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 6.2,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 6.2,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".academicDsai", {
  slidesPerView: 2.5,
  spaceBetween: 30,

  navigation: {
    nextEl: ".academicDsai-next",
    prevEl: ".academicDsai-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3.3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".facultySwiper21", {
  slidesPerView: 2.5,
  spaceBetween: 30,

  breakpoints: {
    0: {
      slidesPerView: 1.3,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 1.5,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 5,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 5,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".activitiesSlider", {
  slidesPerView: 2.5,
  spaceBetween: 30,

  navigation: {
    nextEl: ".activitiesSlider-next",
    prevEl: ".activitiesSlider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3.3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".committeClubSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 30,

  navigation: {
    nextEl: ".committeClubSwiper-next",
    prevEl: ".committeClubSwiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.2,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },

    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },

    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1600: {
      slidesPerView: 3.3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".mastersScrollerStudent", {
  slidesPerView: "auto", // Adjusts dynamically
  centeredSlides: true, // Centers active slide
  spaceBetween: 20,
  loop: true, // Enables infinite loop
  speed: 300, // Smooth transition speed
  autoplay: {
    delay: 2500, // Time before switching slides
    disableOnInteraction: false, // Keeps autoplay running even after interaction
    // pauseOnMouseEnter: true, // Pauses autoplay when hovering
  },
  grabCursor: true, // Shows grabbing cursor
  navigation: {
    nextEl: ".mastersScrollerStudent-next",
    prevEl: ".mastersScrollerStudent-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 5.8,
      spaceBetween: 20,
    },
  },
});


var swiper = window.initSwiperSafe(".revenueWrapper", {
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 300, // Faster transition speed
  autoplay: {
    delay: 3000, // Faster autoplay interval
    disableOnInteraction: false,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".revenueWrapper-next",
    prevEl: ".revenueWrapper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});


var swiper = window.initSwiperSafe(".mastersScrollAi", {
  slidesPerView: "auto", // Adjusts dynamically
  // centeredSlides: true, // Centers active slide
  spaceBetween: 20,
  loop: true, // Enables infinite loop
  autoplay: {
    delay: 1500, // Time before switching slides
    disableOnInteraction: false, // Keeps autoplay running even after interaction
    // pauseOnMouseEnter: true, // Pauses autoplay when hovering
  },
  grabCursor: true, // Shows grabbing cursor
  navigation: {
    nextEl: ".mastersScrollAi-next",
    prevEl: ".mastersScrollAi-prev",
  },
  freeMode: true, // Enables free mode for smooth scrolling
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 15,
      autoplay: false,
      loop: false,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
      autoplay: false,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 10,
    },

    1920: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

var swiper = window.initSwiperSafe(".claimSwiper", {
  slidesPerView: 1.01,
  spaceBetween: 10,
  freeMode: true,
  speed: 300,

  navigation: {
    nextEl: ".claimSwiper-Next",
    prevEl: ".claimSwiper-Prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      freeMode: true,
      autoplay: false,
      spaceBetween: 10,

    },
    1024: {
      slidesPerView: 3.1,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.2,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});

var swiper = window.initSwiperSafe(".bootcamp", {
  spaceBetween: 15,
  navigation: {

    nextEl: ".bootcamp-next",
    prevEl: ".bootcamp-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});


var swiper = window.initSwiperSafe(".realConversationSwiper", {
  spaceBetween: 15,
  navigation: {

    nextEl: ".realConversationSwiper-Next",
    prevEl: ".realConversationSwiper-Prev",
  },
  pagination: {
    el: ".realConversationSwiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    768: {
      slidesPerView: 1.1,
      freeMode: true,
      autoplay: false,
      speed: 400,
    },
    1024: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
    },
    1366: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      freeMode: false,
      spaceBetween: 20,
    },
  },
});








