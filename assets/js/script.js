//Global variables//
const letsPlay = document.getElementById("lets-play");
const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementById("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [...questionsArray]; //copies questions array to prevent mutation of original data
const max_questions = 10;
let score;

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
});

/*Starts game*/
let startGame = () => {
    randomiser();
    getQuestion();
    console.log(availableQuestions);
}

/*randomises question array and cut array length to 10 questions, ensuring no repeats*/
let randomiser = () => {
    availableQuestions.sort((a, b) => 0.5 - Math.random()); //sorts questions array copy into random order
    availableQuestions.length = 10; //removes last 15 questions from new array
}

/*Gets a question set*/
let getQuestion = () => {
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    
    questionBox.innerText = currentQuestion.question;
    console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion['option' + number];
    })
}

startGame ();

//Event listeners for user answer feedback - answer box turns green if correct, red if incorrect//

//next button to load next question//

//progress tracker//

//score tracker//

//Code to ensure questions are not repeated during a single game//

//end page - final score feedback, ?play again//