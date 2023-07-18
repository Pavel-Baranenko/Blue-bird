const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
   menu.classList.toggle("menu__list--active");
   menuBtn.classList.toggle("checked");
   document.querySelector("body").classList.toggle('no__scroll');
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

var swiperCards = new Swiper(".postcards__swiper", {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 20,
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
      1440: {
         slidesPerView: 2.8,
         spaceBetween: 116,
         centeredSlides: true,
      }
   },
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
         spaceBetween: 0,
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




const cookie = document.querySelector(".cookies__btn");

cookie.addEventListener("click", () => {
   document.querySelector('.cookies').classList.add('none-cok');
});
























const read = document.querySelector(".read");


read.addEventListener("click", () => {
   document.querySelector(".book__text").classList.toggle('watch');
});





/*---PopUp--------------------------*/


