const btnMinus = document.querySelectorAll(".number-minus");
const btnPlus = document.querySelectorAll(".number-plus");
const btnFavorite = document.querySelectorAll(".favorite-btn");
let gridBtn = document.querySelector(".grid-button");
let listBtn = document.querySelector(".list-button");
let catalogBox = document.querySelector(".index-catalog-list");
let tabParents = document.querySelectorAll("[data-parent-tabs]");
const select = document.querySelectorAll(".select");
const overlay = document.querySelector('.overlay');
const cabinetModal = document.querySelector('[data-modal="cabinet"]');
const questionsModal = document.querySelector('[data-modal="questions"]');
const cabinetBtns = document.querySelectorAll('[data-btn="cabinet"]');
const questionsBtns = document.querySelectorAll('[data-btn="question"]');

const mobileFilterBtnHide = document.querySelector(".close-aside");
const mobileFilterBtnShow = document.querySelector(".show-aside");
const sideBar = document.querySelector(".grid-layout__aside");

if (mobileFilterBtnShow) {
  mobileFilterBtnShow.addEventListener('click', function(){
    mobileFilterBtnShow.classList.toggle('active');
    sideBar.classList.toggle('active');
  });

  mobileFilterBtnHide.addEventListener('click', function(){
    mobileFilterBtnShow.classList.remove('active');
    sideBar.classList.remove('active');
  });
}

window.onload = function() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu-wrapper');
  const closeMobileMenu = document.querySelector('.close-menu');
  const mobileCatalog = document.querySelector('.mobile-menu__catalog');
  const mobileCatalogFirst = document.querySelector('.mobile-catalog');
  const mobileCatalogSecond = document.querySelectorAll('.main-menu__item');

    [...mobileCatalogSecond].map(function(item){
      const itemLink = item.querySelector('.main-menu__link');
      const itemBack = item.querySelector('.main-menu__sub-back');
      const itemSublist = item.querySelector('.main-menu__sub-list');

      item.onclick = function(){
        itemLink.onclick = function(e){
          itemSublist.classList.add('active');
        }

        itemBack.onclick = function(e){
          itemSublist.classList.remove('active');
        }
      }
    });

    mobileCatalog.addEventListener('click', function(){
      mobileCatalogFirst.classList.toggle('active');
      mobileCatalog.classList.toggle('active');
    });

    burger.addEventListener('click', function(){
      burger.querySelector('span').classList.toggle('active');
      mobileMenu.classList.toggle("animate");
    });

    closeMobileMenu.addEventListener('click', function(){
      burger.querySelector('span').classList.remove('active');
      mobileMenu.classList.remove("animate");
    });

};


// init sliders

let noveltySlider = new Swiper(".top-nav", {
  slidesPerView: "auto",
  spaceBetween: 15,
  speed: 2000,
  navigation: {
    nextEl: ".nav-next",
    prevEl: ".nav-prev",
  },
});

let homeSlider = new Swiper(".home-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 800,
  effect: "fade",
  loop: false,
  speed: 6000,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".home-slider__next",
    prevEl: ".home-slider__prev",
  },
  pagination: {
    el: ".home-slider__pagination",
  },
});

let projectSlider = new Swiper(".project-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 800,
  autoHeight: true,
  effect: "fade",
  loop: false,
});

let singleSliderBottom = new Swiper(".single-card__slider-bottom", {
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: false,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 15,
    }
  }
});

let singleSliderTop = new Swiper(".single-card__slider-top", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: false,
  thumbs: {
    swiper: singleSliderBottom,
  },
  navigation: {
    nextEl: ".single-card__slider-next",
    prevEl: ".single-card__slider-prev",
  },
});

let moreCardSlider = new Swiper(".more-card__slider", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 15,
    }
  }
});

let popularCardSlider = new Swiper(".category-popular__box", {
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: "auto",
      spaceBetween: 15,
    },
    1401: {
      slidesPerView: 5,
      spaceBetween: 15,
    }
  }
});

(function () {
  "use strict";

  const breakpoint = window.matchMedia("(min-width:1024px)");
  let catalogBrandsSlider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (catalogBrandsSlider !== undefined)
        catalogBrandsSlider.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    catalogBrandsSlider = new Swiper(".category-brands__box", {
      slidesPerView: 5,
      spaceBetween: 15,
      speed: 6000,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 15,
        }

      }
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();


(function () {
  "use strict";

  const breakpoint = window.matchMedia("(min-width:1024px)");
  let indexBrandsSlider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (indexBrandsSlider !== undefined)
      indexBrandsSlider.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    indexBrandsSlider = new Swiper(".partners-section__slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      speed: 6000,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 25,
        }

      }

    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();


// init sliders

// filter catalog buttons

if (catalogBox) {
  gridBtn.onclick = function (e) {
    e.preventDefault();
    this.classList.add("active");
    listBtn.classList.remove("active");
    catalogBox.classList.remove("row-item");
  };

  listBtn.onclick = function (e) {
    e.preventDefault();
    this.classList.add("active");
    gridBtn.classList.remove("active");
    catalogBox.classList.add("row-item");
  };
}

// filter catalog buttons

// tabs

tabParents.forEach(function (tabParent) {
  let tabNavs = tabParent.querySelectorAll("[data-tab]");
  let tabPanes = tabParent.querySelectorAll("[data-tab-content]");

  for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      let activeTabAttr = e.target.getAttribute("data-tab");

      for (let j = 0; j < tabNavs.length; j++) {
        let contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("active");
          tabPanes[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabPanes[j].classList.remove("active");
        }
      }
    });
  }
});

// tabs

// counter

for (const btn of btnMinus) {
  btn.onclick = function () {
    this.previousElementSibling.stepDown();
    // this.previousElementSibling.onchange();
  };
}

for (const btn of btnPlus) {
  btn.onclick = function () {
    this.nextElementSibling.stepUp();
    // this.nextElementSibling.onchange();
  };
}

// counter

// like button

for (const btn of btnFavorite) {
  btn.onclick = function () {
    btn.classList.toggle("active");
  };
}

// like button

// select

if (select.length) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".select__current");
    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }
      item.classList.toggle("is-active");
    });
  });
}

// select

// accordion
let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
  });
}
// acoordion

const galleryItems = document.querySelectorAll(".gallery-list");
for (const galleryItem of galleryItems) {
  lightGallery(galleryItem, {
    download: false,
  });
}

const gallerySlides = document.querySelectorAll(".single-card__galery");
for (const gallerySlide of gallerySlides) {
  lightGallery(gallerySlide, {
    mode: "lg-fade",
    cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
    download: false,
  });
}

const galleryTabs = document.querySelectorAll(".single-card-content__article");
for (const galleryTab of galleryTabs) {
  lightGallery(galleryTab, {
    mode: "lg-fade",
    cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
    download: false,
    keyPress: false,
    controls: false,
    counter: false,
    enableDrag: false,
    enableTouch: false
  });
}

if (overlay) {
  overlay.addEventListener('click', function(e) {
    e.stopPropagation();
    let curentTargetWrapper = document.querySelector('.modals-wrapper')
    if (event.target === curentTargetWrapper) {
      overlay.classList.remove('active');
      questionsModal.classList.remove('active');
      cabinetModal.classList.remove('active');
    }
  });
}

if (cabinetBtns) {

  for (const cabinetBtn of cabinetBtns) {
    cabinetBtn.addEventListener('click', function() {
      overlay.classList.add('active');
      cabinetModal.classList.add('active');
    });
  }
}

for (const questionsBtn of questionsBtns) {
  questionsBtn.addEventListener('click', function() {
    overlay.classList.add('active');
    questionsModal.classList.add('active');
  });
}


const modals = document.querySelectorAll('.modal');
for (const modal of modals) {
  const closeBtns = modal.querySelector('.close-btn');

  closeBtns.addEventListener('click', function(){
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
}





