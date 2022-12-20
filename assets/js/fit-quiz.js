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
let quizScore = document.getElementById('right');
let wrongScore = document.getElementById('incorrect');
let shuffledQuestion, currentQuestion;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    // increments to the next question
    currentQuestion++;
    nextQuestion();
});

restartButton.addEventListener('click', gameReset);

 /**
  * This function will intilize the game, add and remove class 'hide'
  */
function startGame(){
    startButton.classList.add('hide');
    questionContElements.classList.remove('hide');

    // questions.sort will randomize my questions
    shuffledQuestion = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    nextQuestion();
}

/**
 * These functions used to increment users score (right or wrong)
 */
function incrementRightAnswer(){
    score++;
    quizScore.innerHTML = score;
}

function incrementWrongAnswer(){
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
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', answerSelect);
        answerButtonElement.appendChild(button);
    });
}

/**
 * resets question being asked 
 */
function resetMode(){
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

/**
 * When called this function rreesets the score vlues of my program
 */
function gameReset (){
    score = 0;
    incorrect = 0;
    quizScore.innerHTML = score;
    wrongScore.innerHTML = incorrect;
    shuffledQuestion = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    restartButton.classList.toggle('hide');
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
        setStatusClass(button, button.dataset.correct);
    });
    // allows to restart if questions exhausted
    if (shuffledQuestion.length > currentQuestion + 1) {
        nextButton.classList.remove('hide');
    } else if (currentQuestion === 0){
        startGame();
        questionContElements.classList.add('hide');

    }else {
        restartButton.classList.remove('hide');
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
    clearStatusElement(element);  
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
        question: 'How many muscle heads do the biceps have?',
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
    {
        question: 'What does BMR stand for?',
        answer: [
            {text: 'Big Massive Roar', correct: false},
            {text: 'Basal Metabolic Rate', correct: true},
        ]
    },
    {
        question: 'What is the measurment used for food',
        answer: [
            {text: 'Calories', correct: true},
            {text: 'Kilojules', correct: false},
            {text: 'Tonnes', correct: false},
            {text: 'Kilometers', correct: false},
        ]
    },
    {
        question: 'What are electrolytes made up of?',
        answer: [
            {text: 'Magnesium', correct: false},
            {text: 'Potassium', correct: false},
            {text: 'Sodium', correct: false},
            {text: 'All 3', correct: true},
        ]
    },
    {
        question: 'What macro mainly supports Hormones?',
        answer: [
            {text: 'Fat', correct: true},
            {text: 'Protein', correct: false},
            {text: 'Carbohydrates', correct: false},
        ]
    },
    {
        question: 'How many Amino acids make up protein?',
        answer: [
            {text: '20', correct: true},
            {text: '30', correct: false},
            {text: '40', correct: false},
            {text: '50', correct: false},
        ]
    },
    {
        question: 'What does creatine contribute too?',
        answer: [
            {text: 'ATP System', correct: false},
            {text: 'Phospho-creatine System', correct: true},
            {text: 'Krebs cycle', correct: false},
            
        ]
    },
    {
        question: 'How many muscle heads do the triceps have?',
        answer: [
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '4', correct: false},
            {text: '5', correct: false},
        ]
    },
    {
        question: 'How many calories does 1g carbs have??',
        answer: [
            {text: '2', correct: false},
            {text: '4', correct: true},
            {text: '6', correct: false},
            {text: '8', correct: false},
        ]
    },
    {
        question: 'How many calories does 1g protein have?',
        answer: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: true},
            {text: '5', correct: false},
        ]
    },
    {
        question: 'How many calories does 1g Fat have?',
        answer: [
            {text: '1', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false},
            {text: '9', correct: true},
        ]
    },
    {
        question: 'What does training cause the muscles to do?',
        answer: [
            {text: 'Build muscle', correct: false},
            {text: 'Micro tears the muscle', correct: true},
        ]
    },
    {
        question: 'What does fibre contribute to?',
        answer: [
            {text: 'Healthy Digestion', correct: false},
            {text: 'Lowers Risk of Diabetes', correct: false},
            {text: 'Weight Loss', correct: false},
            {text: 'All of Them', correct: true},
        ]
    },
    {
        question: 'Which multipler is used for a Sedentary lifestyle?',
        answer: [
            {text: 'x1.2', correct: true},
            {text: 'x1.375', correct: false},
            {text: 'x1.55', correct: false},
            {text: 'x1.9', correct: false},
        ]
    },

];