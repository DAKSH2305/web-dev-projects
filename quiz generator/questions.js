import { questions, currentQuestionIndex } from './quiz-state.js';
import { question, quizOptions, questioncount } from './dom-elements.js';
import { starttimer } from './timer.js';
import { selectOption } from './ui-functions.js';

// Question-related functions
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function loadQuestions() {
    const currentQ = questions[currentQuestionIndex];
    question.innerText = decodeURIComponent(currentQ.question);
    quizOptions.innerHTML = "";
    let options = [...currentQ.incorrect_answers, currentQ.correct_answer];
    options = shuffleArray(options);
    options.forEach((opt) => {
        const li = document.createElement("li");
        li.innerText = decodeURIComponent(opt);
        li.addEventListener("click", () =>
            selectOption(li, decodeURIComponent(currentQ.correct_answer))
        );
        quizOptions.appendChild(li);
    });
    questioncount.innerText = currentQuestionIndex + 1;
    starttimer();
}

async function fetchQuestion() {
    let url = "https://opentdb.com/api.php?amount=5&category=18&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    questions = data.results;
    loadQuestions();
}

// Export question functions
export {
    shuffleArray,
    loadQuestions,
    fetchQuestion
};