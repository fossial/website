let currentSlide = 0;
let banners = document.querySelectorAll('.banner');

// Function to show the current banner and hide others
function showSlide(index) {
    banners.forEach((banner, i) => {
        banner.classList.remove('active'); // Remove active class from all banners
        banner.style.transform = `scale(1)`; // Reset the transform property
    });
    banners[index].classList.add('active'); // Add active class to the current banner
}

// Function to automatically change the banner
function nextSlide() {
    currentSlide = (currentSlide + 1) % banners.length; // Go to the next slide, loop back to the first one
    showSlide(currentSlide);
}

// Set interval to change the banner every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide as active
showSlide(currentSlide);




// This script is optional, only for future enhancements or manual control of slides.
document.addEventListener('DOMContentLoaded', function() {
    // Custom carousel functionality could be added here if needed
});
