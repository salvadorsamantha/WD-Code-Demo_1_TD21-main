// Simple Reviews Slider
let currentReview = 0;
const reviews = document.querySelectorAll('.review');

function showReview(index) {
    reviews.forEach((review, i) => {
        review.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
});

// Initialize
showReview(currentReview);