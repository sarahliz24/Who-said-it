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
//const span = document.getElementsByTagName("span");
console.log(answerOption);

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [...questionsArray]; //copies questions array to prevent mutation of original data
const max_questions = 10;
let score = 0;
let answer;

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

// check to see if at end of question set - if so, send to end page// 

//Event listeners for user answer feedback - answer box turns green if correct, red if incorrect//

/*next button to load next question*/
next = document.getElementById("next-button");
next.addEventListener("click", loadNextQ);

function loadNextQ () {
    //alert("you clicked the next button");
    //questionCounter++;
    //console.log(questionCounter);

   // let link = document.querySelector('wrong-answer');
    //if (link) {
     //   link.removeAttribute('wrong-answer');
    //}

       // function removeClass () {
           // let apple = document.getElementsByClassName('answer-option');
           // apple.classList.remove("correct-answer");
                //if (document.getElementsByClass('correct-answer')) {
               // document.getElementsByClass('correct-answer').removeClass("correct-answer");
           // }
           // if (document.getElementsByClassName('wrong-answer')) {
           //     document.getElementsByClassName('wrong-answer').removeClass("wrong-answer");
           // }
       // } 

        //removeClass()

    questionCounter++;
    console.log(questionCounter);

    //function myFunction() {
      //  var element = document.getElementById("myDIV");
       // element.classList.remove("mystyle");
      //}
   // document.optionsContainer.classList.remove('wrong-answer');

    //document.getElementById("theID").removeAttribute("class")

    getQuestion();
    if (questionCounter >= 3) {
        console.log("more than 3");
        nextButton.style.display = "none";
        endButton.style.display = "block";
    }
}

//score tracker//
function scoreTracker() {

    score; 

    for (let i = 0; i < answerOption.length; i++) {
        
        answerOption[i].addEventListener("click", function() {
          console.log("you clicked answer " + i);

          let answer = currentQuestion.answer;
          console.log("you chose answer " + answer);

            if (i == (answer - 1)) {
                score++;
                console.log("CORRECT! your score is now " + score);
                answerOption[i].classList.add('correct-answer');   //Add class to display correct answer feedback to user
                setTimeout(function() {
                    answerOption[i].classList.remove('correct-answer');
                }, 1000);  //correct answer display removed after a time 
                } else {
                    score;
                    answerOption[i].classList.add('wrong-answer'); //Add class to display wrong answer feedback to user
                    console.log("WRONG! your score is now " + score);
                    setTimeout(function() {
                        answerOption[i].classList.remove('wrong-answer');
                    }, 1000);  //correct answer display removed after a time 
                }
    });
    };
};

/* var header = $('#header');
header.addClass('blue');
setTimeout(function() {
    header.removeClass('blue');
}, 4000); */

scoreTracker();

//end page - final score feedback, ?play again//
/* resets game */
function resetGame () {
    //document.gameDisplay.reload();
    questionCounter = 0;
    endButton.style.display = "none";
    nextButton.style.display = "block";
    startGame();
}

/*sends user to end page when clicking end button at end of question 10*/
endButton.addEventListener("click", () => {
    //homeDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    endPage.style.display = "block";
});

/*sends user to start of game again when clicking playAgainButton*/
playAgainButton.addEventListener("click", () => {
    //homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
    endPage.style.display = "none";
    resetGame ();
    //startGame();
});

/*sends user to home page when clicking goHomeButton*/
goHomeButton.addEventListener("click", () => {
    homeDisplay.style.display = "block";
    //gameDisplay.style.display = "block";
    endPage.style.display = "none";
    resetGame ();
});