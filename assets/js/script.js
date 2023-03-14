//Global variables//
const letsPlay = document.getElementById("lets-play");
//const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementById("question-box");
//const optionsContainer = document.getElementsByClassName("options-container");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
//const home = document.getElementsByClassName("home");
//const game = document.getElementsByClassName("game");
const endPage = document.getElementById("end-page");
const homeDisplay = document.getElementById("home-display");
const rulesDisplay = document.getElementById("rules-display");
const gameDisplay = document.getElementById("game-display");
const nextButton = document.getElementById("next-button");
const endButton = document.getElementById("end-button");
const playAgainButton = document.getElementById("play-again-button");
const goHomeButton = document.getElementById("go-home-button");
const tracker = document.getElementById("tracker");
const outroBox = document.getElementById("outro-box");
const reminder = document.getElementById("reminder");
//console.log(answerOption);

let next;
let currentQuestion = {};
let questionCounter = 1;
let availableQuestions = [...questionsArray]; //copies questions array to prevent mutation of original data
//const maxQuestions = 10;
let score = 0;
//let allowAnswer;
let progress;
let answer;
let acceptingAnswers = true;

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function () {
    startGame();
});

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
    resetGame();
    startGame();
});

/* resets game */
function resetGame() {
    //document.gameDisplay.reload();
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

/*Starts game*/
let startGame = () => {
    getQuestion();
    console.log(availableQuestions);
    scoreTracker();
};

/*randomises question array and cut array length to 10 questions, ensuring no repeats*/
//let randomiser = () => {
// availableQuestions.sort(() => 0.5 - Math.random()); //sorts questions array copy into random order
// availableQuestions.length = 10; //removes last 15 questions from new array
//};

/*Gets a question set*/
let getQuestion = () => {
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]; //ensures random question from availableQuestions list is selected as currentQuestion

    questionBox.innerText = currentQuestion.question;
    console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset.number;
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions); //removes current question from the avaiable list so no repeats in-game
};

// check to see if at end of question set - if so, send to end page// 

/*next button to load next question*/
next = document.getElementById("next-button");
// next.addEventListener("click", loadNextQ);

next.addEventListener("click", () => {
    if (acceptingAnswers) {
        console.log("you forgot!!!");
        reminder.style.display = "block"; //Add class to display reminder feedback to user
        setTimeout(function () {
            reminder.style.display = "none";
            }, 1000); // removes display after a short delay
    } else {
       // reminder.style.display = "none";
        loadNextQ();
    }
});

function loadNextQ() { 
    acceptingAnswers = true;
    questionCounter++;
    progress = document.getElementById("progress").innerText = (`Question ${questionCounter}/ 10`);
    console.log(questionCounter);
    getQuestion();

    if (questionCounter >= 5) {
        console.log("more than 5");
        nextButton.style.display = "none";
        endButton.style.display = "inline-block";
    }
};

//score tracker//
function scoreTracker() {

    for (let i = 0; i < answerOption.length; i++) {

        answerOption[i].addEventListener("click", function listen() {

            if (acceptingAnswers) {
                acceptingAnswers = false

                console.log("you clicked answer " + i);
                console.log(listen);

                answer = currentQuestion.answer;
                console.log("you chose answer " + answer);

                if (i == (answer - 1)) {
                    score++;
                    console.log("CORRECT! your score is now " + score);
                    tracker.innerText = ("CORRECT! your score is now " + score + " out of 10");
                    answerOption[i].classList.add('correct-answer'); //Add class to display correct answer feedback to user
                    setTimeout(function () {
                        answerOption[i].classList.remove('correct-answer');
                    }, 1000); //correct answer display removed after a time
                } else {
                    console.log("WRONG! your score is now " + score);
                    tracker.innerText = ("WRONG! your score is now " + score + " out of 10");
                    answerOption[i].classList.add('wrong-answer');
                    setTimeout(function () {
                        answerOption[i].classList.remove('wrong-answer');
                    }, 1000); //correct answer display removed after a time 
                }
            }
        });

        /*for (let i = 0; i < answerOption.length; i++) {
            answerOption[i].removeEventListener("click", listen)
            }; */ //intended to remove event listener so user cannot select further answers in same question - ?scope issues causing failure
    }
}

//end page - final score feedback, play again & home buttons//

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

/*sends user to end page when clicking end button at end of question 10*/
endButton.addEventListener("click", () => {
    if (acceptingAnswers) {
        reminder.style.display = "block"; //Add class to display reminder feedback to user
        setTimeout(function () {
            reminder.style.display = "none";
            }, 1000);
    } else {
        acceptingAnswers = true;
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

/*sends user to start of game again when clicking playAgainButton*/
playAgainButton.addEventListener("click", () => {
    gameDisplay.style.display = "block";
    endPage.style.display = "none";
    console.log("you clicked the play again button");
    resetGame();
});

/*sends user to home page when clicking goHomeButton*/
goHomeButton.addEventListener("click", () => {
    homeDisplay.style.display = "block";
    endPage.style.display = "none";
    console.log("You clicked the go home  button");
    return window.location.assign('index.html');
});