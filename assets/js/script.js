//Global variables//
const letsPlay = document.getElementById("lets-play");
const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementsByClassName("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
const answerOption = Array.from(document.getElementsByClassName("answer-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");
//const theQuestion = document.getElementByI("theQuestion");
//const options = Array.from(document.querySelectorAll('option'))

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
const max_questions = //Global variables//
const letsPlay = document.getElementById("lets-play");
const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementsByClassName("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");
//const theQuestion = document.getElementByI("theQuestion");
//const options = Array.from(document.querySelectorAll('option'))

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
//let acceptingAnswers = false;
const maxQuestions = 3;
let score =0;

/* Questions array */
let questionsArray = [{
    question: "Movie acting suits me because I only need to be good for 90 seconds at a time",
    option1: "Ryan Reynolds",
    option2: "Angelina Jolie",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "3",
},
{
    question: "Being a father is the single greatest feeling on earth. Not including those wonderful years I spent without a child, of course",
    option1: "Zach Galifianakis",
    option2: "Ryan Reynolds",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "2",
},
{
    question: "Get at least eight hours of beauty sleep, nine if you are ugly",
    option1: "Christina Aguilera",
    option2: "Tara Reid",
    option3: "Marilyn Monroe",
    option4: "Betty White",
    answer: "4",
},
]

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
});

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

let startGame = () => {
    //questionCounter = 0;
    //document.questionOption.innerHTML = questions[currentQuestion].question;
    //score = 0;
    availableQuestions = [...questionsArray];
    getQuestion();
}

let getQuestion = () => {
    //if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
       // localStorage.setItem('mostRecentScore', score)

       // return window.location.assign('about.html')
   // }

    //questionCounter++

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    
    questionBox.outerText = currentQuestion.question;
    console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion['option' + number];
    })

    //availableQuestions.splice(questionIndex, 1);

    // acceptingAnswers = true;
}

startGame();//Global variables//
const letsPlay = document.getElementById("lets-play");
const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementsByClassName("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");
//const theQuestion = document.getElementByI("theQuestion");
//const options = Array.from(document.querySelectorAll('option'))

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
//let acceptingAnswers = false;
const maxQuestions = 3;
let score =0;

/* Questions array */
let questionsArray = [{
    question: "Movie acting suits me because I only need to be good for 90 seconds at a time",
    option1: "Ryan Reynolds",
    option2: "Angelina Jolie",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "3",
},
{
    question: "Being a father is the single greatest feeling on earth. Not including those wonderful years I spent without a child, of course",
    option1: "Zach Galifianakis",
    option2: "Ryan Reynolds",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "2",
},
{
    question: "Get at least eight hours of beauty sleep, nine if you are ugly",
    option1: "Christina Aguilera",
    option2: "Tara Reid",
    option3: "Marilyn Monroe",
    option4: "Betty White",
    answer: "4",
},
]

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
});

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

let startGame = () => {
    //questionCounter = 0;
    //document.questionOption.innerHTML = questions[currentQuestion].question;
    //score = 0;
    availableQuestions = [...questionsArray];
    getQuestion();
}

let getQuestion = () => {
    //if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
       // localStorage.setItem('mostRecentScore', score)

       // return window.location.assign('about.html')
   // }

    //questionCounter++

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    
    questionBox.outerText = currentQuestion.question;
    console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion['option' + number];
    })

    //availableQuestions.splice(questionIndex, 1);

    // acceptingAnswers = true;
}

startGame();//Global variables//
const letsPlay = document.getElementById("lets-play");
const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementsByClassName("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");
//const theQuestion = document.getElementByI("theQuestion");
//const options = Array.from(document.querySelectorAll('option'))

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
//let acceptingAnswers = false;
const maxQuestions = 3;
let score =0;

/* Questions array */
let questionsArray = [{
    question: "Movie acting suits me because I only need to be good for 90 seconds at a time",
    option1: "Ryan Reynolds",
    option2: "Angelina Jolie",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "3",
},
{
    question: "Being a father is the single greatest feeling on earth. Not including those wonderful years I spent without a child, of course",
    option1: "Zach Galifianakis",
    option2: "Ryan Reynolds",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "2",
},
{
    question: "Get at least eight hours of beauty sleep, nine if you are ugly",
    option1: "Christina Aguilera",
    option2: "Tara Reid",
    option3: "Marilyn Monroe",
    option4: "Betty White",
    answer: "4",
},
]

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
});

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

let startGame = () => {
    //questionCounter = 0;
    //document.questionOption.innerHTML = questions[currentQuestion].question;
    //score = 0;
    availableQuestions = [...questionsArray];
    getQuestion();
}

let getQuestion = () => {
    //if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
       // localStorage.setItem('mostRecentScore', score)

       // return window.location.assign('about.html')
   // }

    //questionCounter++

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    
    questionBox.outerText = currentQuestion.question;
    console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion['option' + number];
    })

    //availableQuestions.splice(questionIndex, 1);

    // acceptingAnswers = true;
}

startGame();//Global variables//
const letsPlay = document.getElementById("lets-play");
const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementsByClassName("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");
//const theQuestion = document.getElementByI("theQuestion");
//const options = Array.from(document.querySelectorAll('option'))

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
//let acceptingAnswers = false;
const maxQuestions = 3;
let score =0;

/* Questions array */
let questionsArray = [{
    question: "Movie acting suits me because I only need to be good for 90 seconds at a time",
    option1: "Ryan Reynolds",
    option2: "Angelina Jolie",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "3",
},
{
    question: "Being a father is the single greatest feeling on earth. Not including those wonderful years I spent without a child, of course",
    option1: "Zach Galifianakis",
    option2: "Ryan Reynolds",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "2",
},
{
    question: "Get at least eight hours of beauty sleep, nine if you are ugly",
    option1: "Christina Aguilera",
    option2: "Tara Reid",
    option3: "Marilyn Monroe",
    option4: "Betty White",
    answer: "4",
},
]

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
});

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

let startGame = () => {
    //questionCounter = 0;
    //document.questionOption.innerHTML = questions[currentQuestion].question;
    //score = 0;
    availableQuestions = [...questionsArray];
    getQuestion();
}

let getQuestion = () => {
    //if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
       // localStorage.setItem('mostRecentScore', score)

       // return window.location.assign('about.html')
   // }

    //questionCounter++

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    
    questionBox.outerText = currentQuestion.question;
    console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion['option' + number];
    })

    //availableQuestions.splice(questionIndex, 1);

    // acceptingAnswers = true;
}

startGame();;
let score;

/* Questions array */

const questionsArray = [{
    question: "Movie acting suits me because I only need to be good for 90 seconds at a time",
    option1: "Ryan Reynolds",
    option2: "Angelina Jolie",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "3",
},
{
    question: "Being a father is the single greatest feeling on earth. Not including those wonderful years I spent without a child, of course",
    option1: "Zach Galifianakis",
    option2: "Ryan Reynolds",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "2",
},
{
    question: "Get at least eight hours of beauty sleep, nine if you are ugly",
    option1: "Christina Aguilera",
    option2: "Tara Reid",
    option3: "Marilyn Monroe",
    option4: "Betty White",
    answer: "4",
},
{
    question: "I am odd-looking. I sometimes think I look like a funny Muppet",
    option1: "Angelina Jolie",
    option2: "Marilyn Monroe",
    option3: "Betty White",
    option4: "Tara Reid",
    answer: "1",
},
{
    question: "I make Jessica Simpson look like a rock scientist",
    option1: "Christina Aguilera"
    option2: "Kim Kardashian"
    option3: "Tara Reid"
    option4: "Angelina Jolie"
    answer: "3",
},
{
    question: "The word abbreviation sure is long for what it means",
    option1: "Zach Galifianakis", 
    option2: "Albert Einstein",
    option3: "Betty White",
    option4: "Ryan Reynolds",
    answer: "1",
},
{
    question: "I definitely want...(him) to be christened, but I do not know into what religion yet",
    option1: "Carrie Fisher",
    option2: "Angelina Jolie",
    option3: "David Beckham",
    option4: "Kim Kardashian",
    answer: "3",
},
{
    question: "We did not underestimate them. They were a lot better than we thought",
    option1: "Britney Spears",
    option2: "Donald Trump",
    option3: "David Beckham",
    option4:  "Bobby Robson",
    answer: "4",
},
{
    question: "So, where is the Cannes Film Festival being held this year?",
    option1: "Christina Aguilera",
    option2: "Britney Spears",
    option3: "Tara Reid",
    option4: "Paris Hilton",
    answer: "1",
},
{
    question: "The cool thing about being famous is traveling. I have always wanted to travel across seas, like to Canada and stuff",
    option1: "Paris Hilton",
    option2: "David Beckham",
    option3: "Britney Spears",
    option4: "Tara Reid",
    answer: "2",
},
{
    question: "It is really hard to maintain a one-on-one relationship if the other person is not going to allow me to be with other people",
    option1: "Kate Moss",
    option2: "Axel Rose",
    option4: "Bobby Robson",
    answer: "2",
},
{
    question: "I am sure wherever my Dad is, he is looking down on us. He is not dead, just very condescending",
    option1: "Bobby Robson",
    option2: "Sean Connery",
    option3: "Betty White",
    option4: "Jack Whitehall",
    answer: "4",
},
{
    question: "Two things are infinite: the universe and human stupidity; and I am not sure about the universe",
    option1: "Albert Einstein",
    option2: "Jaden Smith",
    option3: "Jack Whitehall",
    option4: "Sean Connery",
    answer: "4",
},
{
    question: "Man … ninjas are kind of cool … I just do not know any personally",
    option1: "Jaden Smith",
    option2: "Albert Einstein",
    option3: "Kanye West",
    option4: "Kate Moss",
    answer: "3",
},
{
    question: "Do you know where to find marble conference tables? I am looking to have a conference…not until I get the table though",
    option1: "David Beckham",
    option2: "Axel Rose",
    option3: "Donald Trump",
    option4: "Kanye West",
    answer: "4",
},
{
    question: "Nothing tastes as good as skinny feels",
    option1: "Kate Moss",
    option2: "Paris Hilton",
    option3: "Justin Bieber",
    option4: "Carrie Fisher",
    answer: "1",
},
{
    question: "I do not really think, I just walk",
    option1: "Donald Trump",
    option2: "Sean Connery",
    option3: "Axel Rose",
    option4: "Paris Hilton".,
    answer: "4",
},
{
    question: "How can mirrors be real if our eyes are not real?",
    option1: "Kanye West",
    option2: "Jaden Smith",
    option3: "Albert Einstein",
    option4: "Justin Bieber",
    answer: "2",
},
{
    question: "I have a swagger coach that helps me and teaches me different swaggerific things to do…",
    option1: "Jaden Smith",
    option2: "Kanye West",
    option3: "Donald Trump",
    option4:"Justin Bieber",
    answer: "4",
},
{
    question: "The secret to a happy marriage? Do whatever your wife tells you... Yes, dear... And breathe",
    option1: "Denzil Washington",
    option2: "Jack Whitehall",
    option3: "Donald Trump",
    option4: "Bobby Robson",
    answer: "1",
},
{
    question: "Instant gratification takes too long",
    option1: "Kanye West",
    option2: "Justin Bieber",
    option3: "Axel Rose",
    option4: "Carrie Fisher",
    answer: "4",
},
{
    question: "I like women, I don not understand them, but I like them",
    option1: "Sean Connery",
    option2: "Marilyn Monroe",
    option3: "Donald Trump",
    option4: "Arnold Schwarzenegger",
    answer: "1",
},
{
    question: "I think gay marriage is something that should be between a man and a woman",
    option1: "Britney Spears",
    option2: "Donald Trump"
    option4: "Arnold Schwarzenegger",
    answer: "4",
},
{
    question: "Smoking kills. If you are killed, you are lost a very important part of your life",
    option1: "Kim Kardashian",
    option2: "Brooke Shields",
    option3: "Marilyn Monroe"
    option4: "Paris Hilton",
    options: "Marilyn Monroe",
    answer: "2",
},
{
    question: "If you are gonna be two-faced at least make one of them pretty",
    option1: "Kate Moss"
    option2: "Betty White"
    option3: "Brooke Shields"
    option4: "Marilyn Monroe"
    answer: "4",
},
]

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
});

let startGame = () => {
    availableQuestions = [...questionsArray];
    getQuestion();
}

let getQuestion = () => {
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    
    questionBox.outerText = currentQuestion.question;
    console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion['option' + number];
    })
}

startGame ();