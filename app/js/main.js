// var delay_popup = 5000;
// setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);


// function links() {
//    var links = document.querySelector('.hero__links')
//    links.classList.add("active");
// }

// setTimeout(links, 5000);


var element = document.getElementById('overlay');

const link = document.querySelector('.hero__links');
const music = document.querySelector('.music');

window.addEventListener('scroll', function () {
   if (window.scrollY > 500) {
      element.classList.add("shadow");
      music.classList.add("shadow");
      link.classList.add("active");
   } else {
      element.classList.remove("shadow");
      music.classList.remove("shadow");
      link.classList.remove("active");
   }
});






const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
   menu.classList.toggle("menu__list--active");
   document.querySelector("body").classList.toggle('no__scroll');
});

document.querySelector('.menu__btn')
   .onclick = function () {
      if (this.classList.contains('checked')) {
         this.classList.remove('checked')
      }
      else { this.classList.add('checked') }
   }
$(document).mouseup(function (e) {
   var container = $('.menu__btn.checked');
   if (container.has(e.target).length === 0) {
      container.removeClass('checked');
   }
});


const read = document.querySelector(".read");


read.addEventListener("click", () => {
   document.querySelector(".book__text").classList.toggle('watch');
});


var swiper1 = new Swiper(".swiper", {
   speed: 500,
   loop: true,
   slidesPerView: 1.09,
   centeredSlides: true,
   spaceBetween: 8,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
var aboutSwiper = new Swiper(".about__swiper", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 120,
      },
      // when window width is >= 375px
      // when window width is >= 640px
      768: {
         slidesPerView: 2,
         spaceBetween: 151,
         centeredSlides: false,
      },
      1920: {
         slidesPerView: 3,
         spaceBetween: 116,
         centeredSlides: true,
      }
   },
});
var swiperCards = new Swiper(".postcards__swiper", {
   loop: true,
   slidesPerView: "4",
   spaceBetween: 20,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


var popupSwiper = new Swiper(".popup__swiper", {
   loop: true,
   slidesPerView: 1,
   centeredSlides: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      320: {
         spaceBetween: 120,
      },
      768: {

         spaceBetween: 0,
      },
   },
});

var swiperNew = new Swiper(".swiper-art", {
   loop: true,
   slidesPerView: "2.3",
   centeredSlides: true,
   spaceBetween: 20,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
   },
});



const tabsBtn = document.querySelectorAll(".tab-btn");
const tabItems = document.querySelectorAll(".tab__item");

tabsBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function (item) {
         item.classList.remove('active');
      });
      tabItems.forEach(function (item) {
         item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
   })
});


var book__gallery = new Swiper(".book__gallery", {
   direction: 'horizontal',
   slidesPerView: 3,
   spaceBetween: 20,
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1.1,
         spaceBetween: 8
      },
      // when window width is >= 375px
      375: {
         slidesPerView: 1.1,
         spaceBetween: 16
      },
      // when window width is >= 640px
      768: {
         slidesPerView: 1.9,
         spaceBetween: 20
      },
      1440: {
         slidesPerView: 3,
         spaceBetween: 30
      }
   },
});

/*---PopUp--------------------------*/
var modal = document.querySelector(".modal");
var trigger = document.querySelectorAll(".trigger");
var closeButton = document.querySelectorAll(".close-button");

function toggleModal() {
   modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
   if (event.target === modal) {
      toggleModal();
   }
}

// trigger.addEventListener("click", toggleModal);

trigger.forEach(function (item) {
   item.addEventListener('click', toggleModal);
});
closeButton.forEach(function (item) {
   item.addEventListener('click', toggleModal);
});
window.addEventListener("click", windowOnClick);

