var delay_popup = 5000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

// window.onload = function () {
//    $('html, body').animate({
//       scrollTop: $('#fixed').offset().top
//    }, 5000
//    );
// }


function links() {
   var links = document.querySelector('.hero__links')
   links.classList.add("active");
}

setTimeout(links, 5000);

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
   menu.classList.toggle("menu__list--active");
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


var swiper1 = new Swiper(".swiper", {
   speed: 500,
   loop: true,
   slidesPerView: "1",
   centeredSlides: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
   loop: "true",
   slidesPerView: "1",
   centeredSlides: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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


const popup = document.querySelectorAll(".postcards-swiper-wrapper");
const popupOpen = document.querySelector(".postcards__popup");


popup.addEventListener('click', () => {
   popupOpen.classList.add('is-open');
});



const closePopup = document.querySelector(".popup__close");

closePopup.addEventListener('click', () => {
   console.log('test');
   popupOpen.classList.remove('is-open');
});


const popupMob = document.querySelector(".postcards__mob-box");


popupMob.addEventListener('click', () => {
   console.log("test");
   popupOpen.classList.add('is-open');
});