const username = document.getElementById("userName");
const questioncount = document.getElementById("questionCount");
const questionTimer = document.getElementById("questionTimer");
const question = document.getElementById("question");
const quizOptions = document.getElementById("quizOptions");
const finalscore = document.querySelector(".finalScore");
const resultUserName = document.getElementById("resultUserName");
const nextbtn = document.getElementById("nextButton");
// HTML has .container (start card) and .containerplayground (quiz)
const startCard = document.querySelector(".container");              // was .startScreen (null)
const quizContainer = document.querySelector(".containerplayground");
const startbtn = document.querySelector(".startquiz");
export {
    username,
    questioncount,
    questionTimer,
    question,
    quizOptions,
    finalscore,
    resultUserName,
    nextbtn,
    startCard,
    quizContainer,
    startbtn
};