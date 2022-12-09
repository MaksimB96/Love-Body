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
let nextButton = document.getElementById('next');

let shuffledQuestion, currentQuestion;

startButton.addEventListener('click', startGame);

/**
 * This function will intilize the game, add and remove class 'hide'
 */
function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    questionContElements.classList.remove('hide');

    // questtions.sort will randomize my questions
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    nextQuestion();
}

/**
 * This function will the next question to cycle through
 */
function nextQuestion(){
    resetMode();
    showQuestion(shuffledQuestion[currentQuestion])
}

/**
 * 
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

function resetMode(){
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    };
}

/**
 * This function will select user's answer
 */
function answerSelect(event){
    let selectButton = event.target;
    let correct = selectButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    nextButton.classList.remove('hide');
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
    }
]