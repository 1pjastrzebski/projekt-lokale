/* const prev = document.querySelector(".prev");
const next = document.querySelector(".next"); */
const demo = document.querySelectorAll(".demo");
const slides = document.querySelectorAll(".slide");
let slide = 1;
let n = 1;
showSlides(slide);


function currentSlide(n) {
  showSlides((slide = n));
}
function showSlides(n) {
  if (n > slides.length) {
    slide = 1;
  }
  if (n < 1) {
    slide = slide.length;
  }
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  demo.forEach((dem) => {
    if (dem.classList.contains("activee")) {
      dem.classList = dem.classList.remove("activee");
    }
  });
  slides[slide - 1].style.display = "block";
  demo[slide - 1].classList += " activee";
}
