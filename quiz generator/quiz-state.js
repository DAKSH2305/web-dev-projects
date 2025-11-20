// Quiz state variables
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerId = null;

// Export state variables
export {
    questions,
    currentQuestionIndex,
    score,
    timeLeft,
    timerId
};