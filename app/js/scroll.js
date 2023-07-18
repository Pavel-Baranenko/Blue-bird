var element = document.getElementById('overlay');

const link = document.querySelector('.hero__links');
const music = document.querySelector('.music');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    element.classList.add("shadow");
    music.classList.add("shadow");
    link.classList.add("active");
  } else {
    element.classList.remove("shadow");
    music.classList.remove("shadow");
    link.classList.remove("active");
  }
});
