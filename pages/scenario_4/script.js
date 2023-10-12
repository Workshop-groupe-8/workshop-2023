var slideIndex;

document.addEventListener("DOMContentLoaded", function () {
  slideIndex = 1;
  showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides((slideIndex += n));
  updateNextSlideButtonVisibility();
}

function nextSlide() {
  plusSlides(1);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");

  if (n > slides.length) {
    slideIndex = slides.length;
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }

  if (n < 1) {
    slideIndex = 1;
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function updateNextSlideButtonVisibility() {
  var nextButton = document.getElementById("nextButton");
  var nextSlideButton = document.getElementById("nextSlideButton");

  if (nextButton.classList.contains("disabled")) {
    nextSlideButton.style.display = "block";
  } else {
    nextSlideButton.style.display = "none";
  }
}
