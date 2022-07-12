// preloader
const loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// swiper

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    520: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

//   betslipsection
let betClick = document.getElementById("bet");
let betSlipt = document.querySelector(".betslip");
let svgClick = document.querySelector(".fill");
let backDrop = document.querySelector('.backdrop')

betClick.addEventListener("click", clicked);
function clicked() {
  betSlipt.style.display = "block";
  betClick.style.display = "none";
  backDrop.style.display = 'block'
}
svgClick.addEventListener("click", click);
function click() {
  betSlipt.style.display = "none";
  betClick.style.display = "block";
  backDrop.style.display= 'none'
}
backDrop.addEventListener('click',click)
