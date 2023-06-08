const slides = document.querySelector(".slide");
const nextBtn = document.querySelector(".netxBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});
