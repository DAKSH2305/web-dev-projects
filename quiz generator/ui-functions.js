import { quizOptions, nextbtn } from './dom-elements.js';
import { questions, currentQuestionIndex } from './quiz-state.js';
import { stopTimer } from './timer.js';

// UI functions
function disableAllOptions() {
    quizOptions.querySelectorAll('li').forEach(li => {
        li.style.pointerEvents = "none";
        li.classList.add('disabled');
    });
}

function revealCorrect() {
    const currentQ = questions[currentQuestionIndex];
    const correct = decodeURIComponent(currentQ.correct_answer).trim();
    quizOptions.querySelectorAll("li").forEach(li => {
        if (li.innerText.trim() === correct) {
            li.classList.add("correct");
        }
    });
}

function selectOption(selectedLi, correctAnswer) {
    stopTimer();
    disableAllOptions();

    const picked = selectedLi.innerText.trim();
    const correct = correctAnswer.trim();

    if (picked === correct) {
        selectedLi.classList.add("correct");
        score += 1;
    } else {
        selectedLi.classList.add("wrong");
        // Also highlight the correct one
        quizOptions.querySelectorAll("li").forEach(li => {
            if (li.innerText.trim() === correct) li.classList.add("correct");
        });
    }

    // Enable next button
    nextbtn.disabled = false;
    nextbtn.style.opacity = "1";
}

// Export UI functions
export {
    disableAllOptions,
    revealCorrect,
    selectOption
};