// JavaScript to handle image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.mySlides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  slideIndex++;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}
