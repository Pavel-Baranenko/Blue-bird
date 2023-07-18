var modal = document.querySelector(".modal");
var trigger = document.querySelectorAll(".trigger");
var closeButton = document.querySelectorAll(".close-button");

var modalVert = document.querySelector(".modal-vert");
var triggerVert = document.querySelectorAll(".trigger-vert");

function toggleModal() {
  modal.classList.toggle("show-modal");
  document.querySelector("body").classList.toggle('no__scroll');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.forEach(function (item) {
  item.addEventListener('click', toggleModal);
});
closeButton.forEach(function (item) {
  item.addEventListener('click', toggleModal);
});
window.addEventListener("click", windowOnClick);