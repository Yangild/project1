// Poppup
document.querySelector(".open-btn").addEventListener("click", function() {
    document.querySelector(".popupContainer").style.display = "block";
});


document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popupContainer").style.display = "none";
});


// Animation 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
