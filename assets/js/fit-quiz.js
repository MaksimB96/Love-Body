/**
 * Function that allows burger menu to drop down and then close 
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

let randomQuestion, currentQuestion;

// question array and objects
let questions = [
    {
        question: 'What does "RPE" stand for?',
        answer: [
            {text: 'Rate of Percieved Exhertion', correct: true},
            {text: 'Rate of perspiration Experienced', correct: false},
            {text: 'Rate of Percieved Exhertion', correct: true},
            {text: 'Rate of Percieved Exhertion', correct: true},
        ]
    }
]

startButton.addEventListener('click', startGame);


/**
 * This function will intilize the game, add and remove class 'hide'
 */
function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    questionContElements.classList.remove('hide');

    // questtions.sort will randomize my questions
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    nextQuestion()
}

/**
 * This function will the next question to cycle through
 */
function nextQuestion(){
    showQuestion(randomQuestion[currentQuestion])
}

/**
 * 
 */

function showQuestion(question){
    questionElements.innerHTML = question.question;
}

/**
 * This function will select user's answer
 */
function answerSelect(){

}