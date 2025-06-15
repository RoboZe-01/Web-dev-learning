const questions=[
    {
        question:"Which of these is NOT a JavaScript data type?",
        answers:[
            {text :"String" , correct :false},
            {text :"Boolean" , correct :false},
            {text :"Float" , correct :true},
            {text :"Object" , correct :false},
        ]
    
    },

    {
         question:"Which of these is NOT a JavaScript data type?",
        answers:[
            {text :"String" , correct :false},
            {text :"Boolean" , correct :false},
            {text :"Float" , correct :true},
            {text :"Object" , correct :false},
        ]
    },

    {
            question: "Which method adds an element to the end of an array?",
            answers: [
                {text: "push()", correct: true},
                {text: "pop()", correct: false},
                {text: "shift()", correct: false},
                {text: "unshift()", correct: false}
  ]
    },
      
    {
            question: "Which method adds an element to the end of an array?",
            answers: [
                {text: "push()", correct: true},
                {text: "pop()", correct: false},
                {text: "shift()", correct: false},
                {text: "unshift()", correct: false}
                 ]
    },


     {
            question: "How do you declare a function in JavaScript?",
            answers: [
                {text: "function myFunction()", correct: false},
                {text: "const myFunction = () => {}", correct: false},
                {text: "Both A and B", correct: true},
                {text: "None of the above", correct: false}
                     ]
    },
      

    {
            question: "How do you access a property named 'age' in an object 'person'?",
            answers: [
                {text: "person.age", correct: false},
                {text: "person['age']", correct: false},
                {text: "Both A and B", correct: true},
                {text: "None of the above", correct: false}
                     ]
    },
       
    {
            question: "Which statement is used to make decisions in JavaScript?",
            answers: [
                {text: "if...else", correct: false},
                {text: "switch", correct: false},
                {text: "ternary operator", correct: false},
                {text: "All of the above", correct: true}
            ]
    },

    {
            question: "Which loop is guaranteed to execute at least once?",
            answers: [
                {text: "for loop", correct: false},
                {text: "while loop", correct: false},
                {text: "do...while loop", correct: true},
                {text: "forEach loop", correct: false}
            ]
    },


    {
            question: "Which method selects an HTML element by its ID?",
            answers: [
                {text: "document.querySelector()", correct: false},
                {text: "document.getElementById()", correct: true},
                {text: "document.getElementsByClassName()", correct: false},
                {text: "All of the above", correct: false}
            ]
    },

    {
            question: "Which event occurs when a user clicks on an element?",
            answers: [
                {text: "onhover", correct: false},
                {text: "onchange", correct: false},
                {text: "onclick", correct: true},
                {text: "onload", correct: false}
            ]
    }

];


const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("ans-btns");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;


function stratQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState() {

    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}

function showscore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        stratQuiz();
    }
})
stratQuiz();

