//Global variables//
const letsPlay = document.getElementById("lets-play");
//const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementById("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementById("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");
const nextButton = document.getElementById("next-button");
const endButton = document.getElementById("end-button");
const playAgainButton = document.getElementById("play-again-button");
const goHomeButton = document.getElementById("go-home-button");
const tracker = document.getElementById("tracker");
const outroBox = document.getElementById("outro-box");
console.log(answerOption);

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [...questionsArray]; //copies questions array to prevent mutation of original data
const max_questions = 10;
let score = 0;
let allowAnswer;

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    //endPage.style.display = "none";
    gameDisplay.style.display = "block";
});

/*Starts game*/
let startGame = () => {
    randomiser();
    getQuestion();
    console.log(availableQuestions);
    scoreTracker();
};

/*randomises question array and cut array length to 10 questions, ensuring no repeats*/
let randomiser = () => {
    availableQuestions.sort(() => 0.5 - Math.random()); //sorts questions array copy into random order
    availableQuestions.length = 10; //removes last 15 questions from new array
};

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

    availableQuestions.splice(questionIndex, 1); //removes current question from the avaiable list so no repeats in-game
};

// check to see if at end of question set - if so, send to end page// 

/*next button to load next question*/
next = document.getElementById("next-button");
next.addEventListener("click", loadNextQ);

function loadNextQ () {
    questionCounter++;
    console.log(questionCounter);
    getQuestion();

    if (questionCounter >= 3) {
        console.log("more than 3");
        nextButton.style.display = "none";
        endButton.style.display = "inline-block";
    }

    console.log(availableQuestions);
}

//score tracker//
function scoreTracker() {

    for (let i = 0; i < answerOption.length; i++) {
       
        answerOption[i].addEventListener("click", function listen() {
          console.log("you clicked answer " + i);

        let answer = currentQuestion.answer;
        console.log("you chose answer " + answer);

            if (i == (answer - 1)) {
                score++;
                console.log("CORRECT! your score is now " + score);
                tracker.innerText = ("CORRECT! your score is now " + score + " out of 10");
                answerOption[i].classList.add('correct-answer');   //Add class to display correct answer feedback to user
                setTimeout(function() {
                    answerOption[i].classList.remove('correct-answer');
                }, 1000);  //correct answer display removed after a time 
                } else {
                    //score;
                    answerOption[i].classList.add('wrong-answer'); //Add class to display wrong answer feedback to user
                    console.log("WRONG! your score is now " + score);
                    tracker.innerText = ("WRONG! your score is now " + score + " out of 10");
                    setTimeout(function() {
                        answerOption[i].classList.remove('wrong-answer');
                    }, 1000);  //correct answer display removed after a time 
                }
    });
    }
}

//startGame();

//end page - final score feedback, play again & home buttons//

/* resets game */
function resetGame () {
    //document.gameDisplay.reload();
    questionCounter = 0;
    score = 0;
    endButton.style.display = "none";
    nextButton.style.display = "inline-block";
    tracker.innerText = "Welcome! Click on an answer to start playing.";
    currentQuestion = {};
    availableQuestions = [...questionsArray]; //allows question array to be rebuilt
    randomiser();
    //startGame();
}

/*sends user to end page when clicking end button at end of question 10*/
endButton.addEventListener("click", () => {
    //homeDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    endPage.style.display = "block";
    if (score <= 4) {
        outroBox.innerText = "Your final score is " + score + " out of 10."+"\n"+"\n"+"You tried hard, but you really need to brush up on your celebrity knowledge!!"+"\n"+"\n"+"Thanks for playing";
    } else if (score < 7) {
        outroBox.innerText = "Your final score is " + score + " out of 10."+"\n"+"\n"+"You were decidedly average, maybe playing again will help??"+"\n"+"\n"+"Thanks for playing";
    } else {
        outroBox.innerText = "Your final score is " + score + " out of 10."+"\n"+"\n"+"Wow, you really know a lot of useless facts about celebrities - can you prove you're really great by scoring so high again??"+"\n"+"\n"+"Thanks for playing";
    }
});

/*sends user to start of game again when clicking playAgainButton*/
playAgainButton.addEventListener("click", () => {
    //homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
    endPage.style.display = "none";
    console.log("you clicked the play again button");
    resetGame ();
    //startGame();
});

/*sends user to home page when clicking goHomeButton*/
goHomeButton.addEventListener("click", () => {
    homeDisplay.style.display = "block";
    //gameDisplay.style.display = "block";
    endPage.style.display = "none";
    console.log("You clicked the go home  button");
    resetGame ();
});