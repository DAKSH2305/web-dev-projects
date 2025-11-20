import { questionTimer, timeLeft, timerId } from './quiz-state.js';

// Timer functions
function starttimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
    timeLeft = 10;
    questionTimer.innerText = timeLeft;

    timerId = setInterval(() => {
        timeLeft--;
        questionTimer.innerText = Math.max(timeLeft, 0);
        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            
            // Time's up logic
            disableAllOptions();
            revealCorrect();
            
            nextbtn.disabled = false;
            nextbtn.style.opacity = "1";
        }
    }, 1000);
}

function stopTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
}

// Export timer functions
export {
    starttimer,
    stopTimer
};