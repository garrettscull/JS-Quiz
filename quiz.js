// Select elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const startContainer = document.getElementById("startContainer");
const retake = document.getElementById("retakeQuiz");

// Questions

let questions = [
    {
        question: '2 + 2 = ?',
        choiceA: '4',
        choiceB: '5',
        choiceC: '3',
        correct: 'A'
    },
    {
        question: 'What is the best meal of the day?',
        choiceA: 'Breakfast',
        choiceB: 'Lunch',
        choiceC: 'Dinner',
        correct: 'C'
    },
    {
        question: 'What is the meaning of life?',
        choiceA: 'To have fun',
        choiceB: '42',
        choiceC: 'To make toast',
        correct: 'B'
    }
];

// Variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;


// Render a Question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// Start Quiz
function startQuiz() {
    startContainer.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "grid";
    renderProgress();
}

// Render Progress
function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// Check Answer
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // If answer is correct, add it to the score
        score++;
        // & change progress color to green.
        answerIsCorrect();
    } else {
        // If answer is wrong, change progress color to red.
        answerIsWrong();
    }
    if(runningQuestion < lastQuestion) {
        // if not last question, render next question.
        runningQuestion++;
        renderQuestion();
    } else {
        // Otherwise, end the quiz & show score.
        scoreRender();
    }
}

// Answer is correct!
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(142, 252, 128)";
}

// Answer is wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(252, 136, 128)";
}

// Render Score
function scoreRender() {
    quiz.style.display = "none";
    scoreDiv.style.display = "block";

    // Calculate score %
    const scorePercent = Math.round(100 * score/questions.length);

    scoreDiv.innerHTML = "<p>"+ scorePercent +"%</p>"
}