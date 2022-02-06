const btnMinus = document.querySelectorAll('.number-minus');
const btnPlus = document.querySelectorAll('.number-plus');
const btnFavorite = document.querySelectorAll('.favorite-btn');
let gridBtn = document.querySelector(".grid-button");
let listBtn = document.querySelector(".list-button");
let catalogBox = document.querySelector(".index-catalog-list");
let tabParents = document.querySelectorAll("[data-parent-tabs]");
const select = document.querySelectorAll(".select"); // select-box


const btnModalQuestion = document.querySelectorAll('[data-question]') // кнопка модального окна 'задать вопрос'


// init sliders

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
  speed: 800,
  effect: 'fade',
  loop: false,
  navigation: {
    nextEl: ".home-slider__next",
    prevEl: ".home-slider__prev",
  },
  pagination: {
    el: ".home-slider__pagination",
  },
});

let projectSlider = new Swiper('.project-slider', {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 800,
  effect: 'fade',
  loop: false,
});


let singleSliderBottom = new Swiper('.single-card__slider-bottom', {
  slidesPerView: 5,
  spaceBetween: 15,
  loop: false,
  watchSlidesProgress: true,
});


let singleSliderTop = new Swiper('.single-card__slider-top', {
  slidesPerView: 1,
  spaceBetween: 15,
  effect: 'fade',
  loop: false,
  thumbs: {
    swiper: singleSliderBottom,
  },
  navigation: {
    nextEl: ".single-card__slider-next",
    prevEl: ".single-card__slider-prev",
  },


});

let moreCardSlider = new Swiper('.more-card__slider', {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 3000,
  }

});


// init sliders


// filter catalog buttons

if (catalogBox) {
  gridBtn.onclick = function(e) {
    e.preventDefault();
    this.classList.add('active');
    listBtn.classList.remove('active');
    catalogBox.classList.remove('row-item');
  }

  listBtn.onclick = function(e) {
    e.preventDefault();
    this.classList.add('active');
    gridBtn.classList.remove('active');
    catalogBox.classList.add('row-item');
  }
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
      };
    });
  }

});


// tabs


// counter

for (const btn of btnMinus) {
  btn.onclick = function(){
    this.previousElementSibling.stepDown();
    // this.previousElementSibling.onchange();
  }
}

for (const btn of btnPlus) {
  btn.onclick = function(){
    this.nextElementSibling.stepUp();
    // this.nextElementSibling.onchange();
  }
}

// counter


// like button

for (const btn of btnFavorite) {
  btn.onclick = function(){
    btn.classList.toggle('active');
  }

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
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      // if (panel.style.maxHeight) {
      //   panel.style.maxHeight = null;
      // } else {
      //   panel.style.maxHeight = panel.scrollHeight + "px";
      // }
    });
  }
// acoordion


const galleryItems = document.querySelectorAll('.gallery-list');

for (const galleryItem of galleryItems) {
  lightGallery(galleryItem,{
    download: false,
  });
}

const gallerySlides = document.querySelectorAll('.single-card__galery');

for (const gallerySlide of gallerySlides) {
  lightGallery(gallerySlide, {
    mode: 'lg-fade',
    cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
    download: false,
  });
}

// const tabsGallery = document.querySelectorAll('[data-gallery="tabsGallery"]');


// for (const tabGallery of tabsGallery) {
//   lightGallery(tabGallery, {
//     download: false,
//   });
// }
