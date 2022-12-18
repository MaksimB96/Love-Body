/**
 * Toggles between class lists in order to llow slide down menu 
 */
function showMenu(){
    document.querySelector('.navigate').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

let startButton = document.getElementById('start');
let questionContElements = document.getElementById('question-cont');
let questionElements = document.getElementById('question');
let answerButtonElement = document.getElementById('answer-btn');
let nextButton = document.getElementById('next');
let restartButton = document.getElementById('restart');
let score = 0;
let incorrect = 0;
let quizScore = document.getElementById('right')
let wrongScore = document.getElementById('incorrect')
let shuffledQuestion, currentQuestion;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    // increments to the next question
    currentQuestion++;
    nextQuestion();
})
restartButton.addEventListener('click', gameReset)


 /**
  * This function will intilize the game, add and remove class 'hide'
  */
function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    questionContElements.classList.remove('hide');

    // questions.sort will randomize my questions
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    nextQuestion();
}

/**
 * These functions used to increment users score (right or wrong)
 */
//I changed quiz score from let to var
function incrementRightAnswer(){
    // let quizScore = parseInt(document.getElementById('right').innerText);
    // document.getElementById('right').innerText = ++quizScore;
    score++;
    quizScore.innerHTML = score;
}

function incrementWrongAnswer(){
    // let quizScore = parseInt(document.getElementById('incorrect').innerText);
    // document.getElementById('incorrect').innerText = ++quizScore;
    incorrect++;
    wrongScore.innerHTML = incorrect;
}

/**
 * This function will get the next question to cycle through
 */
function nextQuestion(){
    resetMode();
    showQuestion(shuffledQuestion[currentQuestion]);
}

/**
 * for each loop used to traverse my array and wait for user input question 
 */
function showQuestion(question){
    questionElements.innerHTML = question.question;
    question.answer.forEach(answer => {
        let button =  document.createElement('button');
        // inner text will be set to text in array
        button.innerText = answer.text;
        button.classList.add('btn');
        // check if answer is correct
        if(answer.correct){
            button.dataset.correct = answer.correct
        };

        button.addEventListener('click', answerSelect);
        answerButtonElement.appendChild(button);
    })
}

/**
 * resets question being asked 
 */
function resetMode(){
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    };
}

function gameReset (){
    console.log("game is reset");
    score = 0;
    incorrect = 0;
    quizScore.innerHTML = score;
    wrongScore.innerHTML = incorrect
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    nextQuestion();
}

/**
 * Selects users answer and checks if correct or wrong and then increment event 
 */
function answerSelect(event){
    let selectButton = event.target;
    let correct = selectButton.dataset.correct;
    setStatusClass(document.body, correct);
    // coverts answerbuttonelements.children to array so I can loop through it
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    // allows to restart if questions exhausted
    if (shuffledQuestion.length > currentQuestion + 1) {
        nextButton.classList.remove('hide');
    } else {
        // startButton.innerText = 'Restart';
        // startButton.classList.remove('hide');
        restartButton.classList.remove('hide');
        gameReset(); 
    }
    //increments users answers by calling right/wrong answer functions
    //My true dataset, statement was a string therefore true represented as such
    if (correct === 'true'){
        incrementRightAnswer();
    } else {
        incrementWrongAnswer();
    }


}

function setStatusClass(element, correct){
    clearStatusElement(element)  
        if (correct){
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
}

function clearStatusElement (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// question array and objects
let questions = [
    {
        question: 'What does "RPE" stand for?',
        answer: [
            {text: 'Rate of Percieved Exhertion', correct: true},
            {text: 'Rate of perspiration Experienced', correct: false},
        ]
    },
    {
        question: 'What does "1RM" stand for?',
        answer: [
            {text: '1 Rep Max', correct: true},
            {text: '1 Rotation per Minute', correct: false},
        ]
    },
    {
        question: 'How many muscle heas do the biceps have?',
        answer: [
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false},
            {text: '5', correct: false},
        ]
    },
    {
        question: 'What does concentric phase mean?',
        answer: [
            {text: 'Shortening of the muscle', correct: true},
            {text: 'Elongating the muscle', correct: false},
        ]
    },
    {
        question: 'What does eccentric phase mean?',
        answer: [
            {text: 'Shortening of the muscle', correct: false},
            {text: 'Elongating the muscle', correct: true},
        ]
    },
    {
        question: 'What are compound movement?',
        answer: [
            {text: 'Movements using multiple muscle groups', correct: true},
            {text: 'Movements using one muscle group', correct: false},
        ]
    },
    {
        question: 'What does HIIT stand for?',
        answer: [
            {text: 'Holy intensity interval training', correct: false},
            {text: 'High intensity interval training', correct: true},
        ]
    },

]