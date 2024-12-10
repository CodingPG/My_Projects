const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            {text: "Shark", correct: "false"},
            {text: "Blue Whale", correct: "true"},
            {text: "Elephant", correct: "false"},
            {text: "Giraffe", correct: "false"},
        ]
    },
    {
        question: "What is the process by which the plants make their food ?",
        answers: [
            {text: "Respiration", correct: "false"},
            {text: "Fermentation", correct: "false"},
            {text: "Photosynthesis", correct: "true"},
            {text: "Digestion", correct: "false"},
        ]
    },
    {
        question: "Which sport is known as the king of sport ?",
        answers: [
            {text: "Cricket", correct: "false"},
            {text: "Hockey", correct: "false"},
            {text: "Basketball", correct: "false"},
            {text: "Soccer", correct: "true"},
        ]
    },
    {
        question: "Which is the largest planet in our solar system ?",
        answers: [
            {text: "Earth", correct: "false"},
            {text: "Saturn", correct: "false"},
            {text: "Mars", correct: "false"},
            {text: "Jupiter", correct: "true"},
        ]
    },
    {
        question: "Whiich is the only country that is also a continent",
        answers: [
            {text: "Australia", correct: "true"},
            {text: "India", correct: "false"},
            {text: "Antartica", correct: "false"},
            {text: "Brazil", correct: "false"},
        ]
    },
    {
        question: "What is the term for a word that is spelled the same forwards and backwards ?",
        answers: [
            {text: "Anagram", correct: "false"},
            {text: "Homonym", correct: "false"},
            {text: "Oxymoron", correct: "false"},
            {text: "Palindrome", correct: "true"},
        ]
    },
    {
        question: "What is the name of the first artificial Earth satellite ?",
        answers: [
            {text: "Sputnik 1", correct: "true"},
            {text: "Voyager 1", correct: "false"},
            {text: "Apollo 11", correct: "false"},
            {text: "Hubble space telescope", correct: "false"},
        ]
    },
    {
        question: "What is the name of the largest moon of Saturn ?",
        answers: [
            {text: "Callisto", correct: "false"},
            {text: "Titan", correct: "true"},
            {text: "Ganymede", correct: "false"},
            {text: "Europa", correct: "false"},
        ]
    },
    {
        question: "Which is the largest river in Asia ?",
        answers: [
            {text: "Ganges", correct: "false"},
            {text: "Yangtze", correct: "true"},
            {text: "Mekong", correct: "false"},
            {text: "Indus", correct: "false"},
        ]
    },
    {
        question: "Which composer is known for his symphonies, including the Eroica and Pastoral ?",
        answers: [
            {text: "Johannes Brahms", correct: "false"},
            {text: "Ludwig van Beethovens", correct: "true"},
            {text: "Wolfgang Amadeus Mozart", correct: "false"},
            {text: "Franz Schubert", correct: "false"},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();