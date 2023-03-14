//Global variables//
const letsPlay = document.getElementById("lets-play");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
const endPage = document.getElementById("end-page");
const homeDisplay = document.getElementById("home-display");
const rulesDisplay = document.getElementById("rules-display");
const gameDisplay = document.getElementById("game-display");
const nextButton = document.getElementById("next-button");
const endButton = document.getElementById("end-button"); //go to results page button
const playAgainButton = document.getElementById("play-again-button");
const goHomeButton = document.getElementById("go-home-button");
const tracker = document.getElementById("tracker");
const reminder = document.getElementById("reminder");

let next;
let currentQuestion = {};
let questionCounter = 1;
let availableQuestions = [...questionsArray]; //copies questions array to prevent mutation of original data
let score = 0;
let progress;
let answer;
let acceptingAnswers = true;

/*Lets DOM load before starting play*/
//document.addEventListener("DOMContentLoaded", function () {
//startGame();
//});

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
    resetGame();
    startGame();
});

/*RESET GAME - */
function resetGame() {
    questionCounter = 1;
    score = 0;
    endButton.style.display = "none";
    nextButton.style.display = "inline-block";
    tracker.innerText = "Welcome! Click on an answer to start playing";
    progress = document.getElementById("progress").innerText = (`Question ${questionCounter}/ 10`);
    answer = "";
    availableQuestions = [...questionsArray]; //allows question array to be rebuilt
    reminder.style.display = "none";
}

/*START GAME - */
let startGame = () => {
    getQuestion();
    scoreTracker();
};

/*GET QUESTION - */
let getQuestion = () => {
    const questionBox = document.getElementById("question-box");
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //randomises question selection
    currentQuestion = availableQuestions[questionIndex]; //ensures random question from availableQuestions list is selected as currentQuestion

    questionBox.innerText = currentQuestion.question;

    answerOption.forEach((option) => {
        const number = option.dataset.number;
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestions.splice(questionIndex, 1); //Removes current question from the avaiable list so no repeats in-game
    console.log(availableQuestions);
};

/*next button to load next question*/
next = document.getElementById("next-button");

/*NEXT BUTTON - Loads next question OR reminds user to select an answer*/
next.addEventListener("click", () => {
    if (acceptingAnswers) {
        console.log("you forgot!!!"); //console checking that this event listener is working
        reminder.style.display = "block"; //Display feedback to user to select an answer
        setTimeout(function () {
            reminder.style.display = "none";
        }, 1000); // removes reminder display after a short delay so user can continue game
    } else {
        loadNextQ();
    }
});

/*LOAD NEXT QUESTION - allows user to select an answer,
increments question display counter, gives written feedback to 
user re current score, gets new question*/
function loadNextQ() {
    acceptingAnswers = true;
    questionCounter++; //increments question display counter
    progress = document.getElementById("progress").innerText = (`Question ${questionCounter}/ 10`); //written feedback to user on current progress
    getQuestion();

    if (questionCounter >= 10) { //at final question shows user the go to results (go to end page) button
        console.log("you are on question 10");
        nextButton.style.display = "none";
        endButton.style.display = "inline-block";
    }
}

/*SCORE TRACKER - loops through each of the answer options,
records which answer user selected, gives visual and written
feedback to user, increments score*/
function scoreTracker() {

    for (let i = 0; i < answerOption.length; i++) { //loops through each available answer

        answerOption[i].addEventListener("click", function listen() { //takes in user answer selection

            if (acceptingAnswers) {
                acceptingAnswers = false; //allows user to select answer

                answer = currentQuestion.answer;

                if (i == (answer - 1)) {
                    score++; //increments score by 1 if answer correct
                    console.log("CORRECT! your score is now " + score);
                    tracker.innerText = ("CORRECT! your score is now " + score + " out of 10"); //Updates tracker display to give written correct answer feedback to user
                    answerOption[i].classList.add('correct-answer'); //Add class to display correct answer (visual) feedback to user, turning answer box green
                    setTimeout(function () {
                        answerOption[i].classList.remove('correct-answer');
                    }, 800); //correct answer display removed after a time
                } else {
                    console.log("WRONG! your score is now " + score);
                    tracker.innerText = ("WRONG! your score is now " + score + " out of 10"); //Updates tracker display to give written wrong answer feedback to user
                    answerOption[i].classList.add('wrong-answer'); //Add class to display correct answer (visual) feedback to user, turning answer box red
                    setTimeout(function () {
                        answerOption[i].classList.remove('wrong-answer');
                    }, 800); //correct answer display removed after a time
                }
            }
        });
    }
}

/*send user to rules page when clicking rules button on home page*/
const rules = document.getElementById("rules-button");
rules.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    rulesDisplay.style.display = "block";
});

/*send user to home page when clicking go back button on rules page*/
const goBack = document.getElementById("go-back");
goBack.addEventListener("click", () => {
    homeDisplay.style.display = "block";
    rulesDisplay.style.display = "none";
});

/*sends user to end (results) page when clicking end button after answering final question*/
endButton.addEventListener("click", () => {
    if (acceptingAnswers) {
        reminder.style.display = "block"; //Adds class to display reminder feedback to user to choose an answer for final question
        setTimeout(function () {
            reminder.style.display = "none";
        }, 1000);
    } else {
        const outroBox = document.getElementById("outro-box");
        acceptingAnswers = true; //disallows user from selecting further answer after answering final question
        gameDisplay.style.display = "none";
        endPage.style.display = "block";
        if (score <= 4) {
            outroBox.innerText = "Your final score is " + score + " out of 10." + "\n" + "\n" + "You tried hard, but you really need to brush up on your celebrity knowledge!!" + "\n" + "\n" + "Thanks for playing";
        } else if (score < 7) {
            outroBox.innerText = "Your final score is " + score + " out of 10." + "\n" + "\n" + "You were decidedly average, maybe playing again will help??" + "\n" + "\n" + "Thanks for playing";
        } else {
            outroBox.innerText = "Your final score is " + score + " out of 10." + "\n" + "\n" + "Wow, you really know a lot of useless facts about celebrities - can you prove you're really great by scoring so high again??" + "\n" + "\n" + "Thanks for playing";
        }
    }
});

/*sends user to start of a new set of questions when clicking playAgainButton*/
playAgainButton.addEventListener("click", () => {
    gameDisplay.style.display = "block";
    endPage.style.display = "none";
    resetGame();
});

/*sends user back to home page when clicking return button*/
goHomeButton.addEventListener("click", () => {
    homeDisplay.style.display = "block";
    endPage.style.display = "none";
    return window.location.assign('index.html');
});