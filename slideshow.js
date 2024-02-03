
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sliding");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

  let slideInterval = setInterval(plusSlides, 3000, 1); // Change slide every 3 seconds

  // Pause slideshow when hovering over the slideshow container
  document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  // Resume slideshow when mouse leaves the slideshow container
  document.querySelector('.slideshow-container').addEventListener('mouseleave', () => {
    slideInterval = setInterval(plusSlides, 3000, 1); // Change slide every 3 seconds
  });

  