let photos = [
  "images/photo1.jpeg",
  "images/photo2.jpeg",
  "images/photo3.jpeg",
  "images/photo4.jpeg",
  "images/photo5.jpeg",
  "images/photo6.jpeg"
];

let currentIndex = 0;

const slideImage = document.getElementById("slideImage");

function showSlide(index) {
  slideImage.style.opacity = 0;

  setTimeout(() => {
    slideImage.src = photos[index];
    slideImage.style.opacity = 1;
  }, 300);
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= photos.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = photos.length - 1;
  }
  showSlide(currentIndex);
}