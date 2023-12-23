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





