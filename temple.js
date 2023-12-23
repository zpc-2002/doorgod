function setupCarousel(carouselId) {
    var currentSlide = 0;

    function showSlide(index) {
        var slides = document.querySelectorAll(`#${carouselId} .slide`);

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });

        slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    showSlide(0);

    // You can also add event listeners for next and previous buttons if needed
}

// Initialize each carousel
document.addEventListener('DOMContentLoaded', function () {
    setupCarousel('carousel1');
    setupCarousel('carousel2');
    setupCarousel('carousel3');
    setupCarousel('carousel4');
    setupCarousel('carousel5');
    setupCarousel('carousel6');
    setupCarousel('carousel7');
    setupCarousel('carousel8');
    setupCarousel('carousel9');
    setupCarousel('carousel10');
    // Add more if needed
});
