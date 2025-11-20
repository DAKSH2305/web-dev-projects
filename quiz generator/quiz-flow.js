import { quizContainer, finalscore, resultUserName, username, nextbtn } from './dom-elements.js';
import { questions, score, currentQuestionIndex } from './quiz-state.js';
import { stopTimer } from './timer.js';
import { loadQuestions } from './questions.js';

// Quiz flow functions
function endQuiz() {
    stopTimer();
    quizContainer.style.display = "none";

    if (resultUserName) {
        resultUserName.innerText = username.value;
    }
    if (finalscore) {
        finalscore.innerText = `${score}/${questions.length}`;
    }

    if (!finalscore && !resultUserName) {
        alert(`Name: ${username.value.trim()} | Score: ${score}/${questions.length}`);
    }
}

function handleNextButton() {
    stopTimer();
    currentQuestionIndex += 1;
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
    } else {
        loadQuestions();
    }
}

// Export quiz flow functions
export {
    endQuiz,
    handleNextButton
};