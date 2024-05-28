let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides)
  
  let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
    //if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides[slideIndex])
  slides[slideIndex].style.display = "block";


  autoSlide();
}


function autoSlide()
{
    let slides = document.getElementsByClassName("mySlides");

    
    setInterval(() => {

        if(slideIndex >= slides.length-1)
        {
            console.log(slideIndex)
            slideIndex = 0;
        }

        if(slideIndex === slides.length)
        {
            slides[slides.length].style.display = "none";
        }
        slides[slideIndex].style.display = "none";
        console.log(slideIndex)
        slideIndex++;
        slides[slideIndex].style.display = "block";        
      }, 2000)

}