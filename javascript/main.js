const btnToggle = document.getElementById('toggleMenu');

function toggleMenu()
{
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnToggle.addEventListener('click', toggleMenu);

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n)
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlides, 5000);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndex].className += " active";
  }
}

const autoSlides = function() {
    slideIndex++;
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {
      slideIndex = 0;
    }
    showSlides(slideIndex);
}


document.addEventListener('DOMContentLoaded', () => {
  const styles = {
    visible: 'visible',
    hidden: 'hidden'
  };

const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.visible);
        entry.target.classList.remove(styles.hidden);
        intersectionObserver.unobserve(entry.target);
      }
    });
  });

  const indique = document.querySelectorAll('.referContainer');
  const socios = document.querySelectorAll('.patnersImgs');
  const sociosText = document.querySelectorAll('.topPartnersText')
  const items = [...indique, ...socios, ...sociosText]

  items.forEach((item) => {
    item.classList.add(styles.hidden);
    intersectionObserver.observe(item);
  });
});

let autoSlideInterval = setInterval(autoSlides, 5000);