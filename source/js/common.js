const btnMinus = document.querySelectorAll('.number-minus');
const btnPlus = document.querySelectorAll('.number-plus');
const btnFavorite = document.querySelectorAll('.favorite-btn');
let gridBtn = document.querySelector(".grid-button");
let listBtn = document.querySelector(".list-button");
let catalogBox = document.querySelector(".index-catalog-list");
let tabParents = document.querySelectorAll("[data-parent-tabs]");


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



for (const btn of btnMinus) {
  btn.onclick = function(){
    this.previousElementSibling.stepDown();
    this.previousElementSibling.onchange();
  }
}

for (const btn of btnPlus) {
  btn.onclick = function(){
    this.nextElementSibling.stepUp();
    this.nextElementSibling.onchange();
  }
}

for (const btn of btnFavorite) {
  btn.onclick = function(){
    btn.classList.toggle('active');
  }

}


