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


// 選擇題

const quizForm = document.getElementById("quizForm");
const resultsDiv = document.getElementById("results");

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value
    };

    const correctAnswers = {
        q1: "a",
        q2: "a"
    };

    let score = 0;

    for (const question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++;
        }
    }

    resultsDiv.innerHTML = `你得分為：${score} / 2`;
});

// 彈跳視窗
// alert() 
function a() {

    alert('這是彈跳警告視窗');
}

// confirm() 
function c() {
    m = confirm('這是彈跳確認視窗');
    // 可透過真假值去做不同的變化
    if (m == true)
        alert("按下確定");
}


Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
})

const showAlert = () => {
    Swal.fire({
        icon: 'success',
        title: 'Hi',
        text: 'Thanks for coming!',
    })
}
