"use strict";

// Slider component

// Selecting all the html elements needed for the component
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider-btnleft");
const btnRight = document.querySelector(".slider-btnright");
// const dotContainer = document.querySelector('.dots');

// Defining a variable to keep track of the current slide
let currentSlide = 0;

// Function to translate the slides elements
const goToSlide = function (slidenum) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slidenum)}%)`;
  });
  //   let url = `../img/ft-art-${slidenum}.jpg`
  slider.style.setProperty(
    "--hl-background",
    `url("../img/ft-art-${slidenum + 1}.jpg")`
  );
};

// Initializing the components on slide 0
goToSlide(0);

// Functions to go to the next slide and previous slide
const nextSlide = function () {
  if (currentSlide === slides.length - 1) currentSlide = -1;
  currentSlide++;
  goToSlide(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) currentSlide = slides.length;
  currentSlide--;
  goToSlide(currentSlide);
};

// Creating the event listeners for the buttons
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
