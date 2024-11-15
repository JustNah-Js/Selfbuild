/*Img slider section*/
const slides = document.querySelectorAll(".slides img")
let slideIndex = 0; /*set order of each img*/
let intervalId = null; /*for setInterval()*/

// Wait for web to load then display content
document.addEventListener("DOMContentLoaded", initializeSlider);


// Display picture
function initializeSlider(){

  // check if there's any img
  if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000); /*delay for next action*/
  }
  
}

//Control how img should loop
function showSlide(index){

  /*loop function*/
  if(index >= slides.length){
    slideIndex = 0;
  }
  else if(index < 0){
    slideIndex = slides.length - 1;
  }

  /*remove previous img*/
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  })

  /*add class to new img*/
  slides[slideIndex].classList.add("displaySlide");
}

// get back to previous img
function prevSlide(){

  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 15000); // Stop auto next img when run function
  slideIndex--; /*decrease number to display img*/
  showSlide(slideIndex); /*call function*/
}

// go to next img
function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
}
/*End of section*/