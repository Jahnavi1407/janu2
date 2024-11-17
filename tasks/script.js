// script.js

// Select the correct container and images
const carouselImages = document.querySelector(".carousel-images");
const items = document.querySelectorAll(".carousel-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showImage() {
    const itemWidth = items[0].clientWidth; // Get width of a carousel item
    carouselImages.style.transform = `translateX(-${index * itemWidth}px)`; // Translate by index
}

prev.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length; // Loop to the last item
    showImage();
});

next.addEventListener("click", () => {
    index = (index + 1) % items.length; // Loop to the first item
    showImage();
});

// Initialize carousel
showImage();

next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage();
});

// Fetch Joke from API
const jokeBtn = document.getElementById("joke-btn");
const jokeDisplay = document.getElementById("joke-display");

jokeBtn.addEventListener("click", async () => {
    const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await response.json();
    jokeDisplay.textContent = `${data.setup} - ${data.punchline}`;
});

// Quiz Functionality
// Select all quiz questions and result container
const quizSubmit = document.getElementById("quiz-submit");
const quizResult = document.getElementById("quiz-result");

quizSubmit.addEventListener("click", () => {
    // Check answers for each question
    const q1Answer = document.querySelector('input[name="flower1"]:checked');
    const q2Answer = document.querySelector('input[name="flower2"]:checked');
    const q3Answer = document.querySelector('input[name="flower3"]:checked');
    
    if (!q1Answer || !q2Answer || !q3Answer) {
        quizResult.textContent = "Please answer all questions.";
        return;
    }
    
    // Check the answers
    let result = "";
    result += (q1Answer.value === "rose") ? "Q1: Correct! Rose symbolizes love.\n" : "Q1: Incorrect. The correct answer is Rose.\n";
    result += (q2Answer.value === "crocus") ? "Q2: Correct! Crocus blooms in winter.\n" : "Q2: Incorrect. The correct answer is Crocus.\n";
    result += (q3Answer.value === "sunflower") ? "Q3: Correct! Sunflower symbolizes happiness and warmth.\n" : "Q3: Incorrect. The correct answer is Sunflower.\n";
    
    // Display results
    quizResult.textContent = result;
});

