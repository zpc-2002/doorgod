// JavaScript代碼用於實現圖像滑動
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    const slideWidth = slides[currentSlide].clientWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// 自動播放圖片滑動
setInterval(nextSlide, 3000);


var currentSlide = 0;

function showSlide(index) {
    var slides = document.querySelectorAll('.slide');
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Hide all slides
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });

    // Show the current slide
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Show the first slide when the page loads
showSlide(0);

// You can also add event listeners for next and previous buttons


