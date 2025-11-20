// Main application file
import { startbtn, startCard, quizContainer, username, nextbtn } from './dom-elements.js';
import { fetchQuestion } from './questions.js';
import { handleNextButton } from './quiz-flow.js';

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Safe guards (optional)
    if (!startbtn || !startCard || !quizContainer) {
        console.error("Required elements not found");
        return;
    }

    startbtn.addEventListener("click", function () {
        if (username.value.trim() === "") {
            alert("please enter the name!!");
            return;
        }
        // Hide start card, show quiz
        startCard.style.display = "none";
        quizContainer.style.display = "block";
        fetchQuestion();
    });

    nextbtn.addEventListener('click', handleNextButton);
});