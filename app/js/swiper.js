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


var swiper1 = new Swiper(".swiper-new", {
  loop: true,
  slidesPerView: "1",
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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