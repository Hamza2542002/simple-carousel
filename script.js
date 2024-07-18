let activeIndex = 0;
const slides = document.querySelectorAll(
  ".parent .carousel-inner .carousel-item"
);
const bullets = document.querySelectorAll(".parent .bullets span");

let nextTimeOut = 0;

function slideShow(index) {
  if (index >= slides.length) activeIndex = 0;
  else if (index < 0) activeIndex = slides.length - 1;
  else activeIndex = index;

  const content = document.querySelector(".parent .carousel-inner");
  content.style.transform = `translateX(-${activeIndex * 100}%)`;

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeIndex].classList.add("active");

  bullets.forEach((slide) => slide.classList.remove("active"));
  bullets[activeIndex].classList.add("active");
}

function nextSlide() {
  slideShow(activeIndex + 1);
  clearTimeout(nextTimeOut);

  nextTimeOut = setTimeout(() => {
    nextSlide();
  }, 3000);
}

function prevSlide() {
  slideShow(activeIndex - 1);
  clearTimeout(nextTimeOut);

  nextTimeOut = setTimeout(() => {
    nextSlide();
  }, 3000);
}
