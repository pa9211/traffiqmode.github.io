const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

// Quiz state Variables
const QUIZ_TIME_LIMIT = 10;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "red_sign";
let numberOfQuestions = 10;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswercount = 0;


// Display the quiz result and hide the quiz container
const ShowQuizResult = () => {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  const resultText =`You answered <b>${correctAnswercount}</b> out of <b>${numberOfQuestions}</b> question correctly.Great effort!`;
  document.querySelector(".result-message").innerHTML = resultText;
}

// Clear and reset th timer
const resetTimer = () => {
  clearInterval (timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}`
}

// Intilaze and start the timer for the current question
const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`; 

    if(currentTime <= 0) {
      clearInterval(timer);
      highlightCorrectAnswer ();
      nextQuestionBtn.style.visibility = "visible";
      quizContainer.querySelector(".quiz-timer").style.background = "#c31402"


      // Disable all answer options is selected
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");    
    }
  }, 1000);
}

// Fetch a rando question from based on the selected category
const getRandomquestion = () => {
    const categoryQuestions = questions.find (cat => cat.category.toLowerCase() === quizCategory.toLowerCase
    ()).questions || [];

    if(questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
      return ShowQuizResult();
    }
 
    // Filter out already asked questions and choose a random number one
    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];


    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

// Highlight the correct answer option and add icon
const highlightCorrectAnswer = () => {
    clearInterval(timer);

    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
    const isCorrect =  currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? highlightCorrectAnswer() : correctAnswercount++;

    // Insert icon based on correctness
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle': 'cancel'}</
    span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

// Disable all answer options is selected
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    nextQuestionBtn.style.visibility = "visible";
}

// Render the current question and its options in the quiz 
const renderQuestion = () => {
 currentQuestion = getRandomquestion();  
  if(!currentQuestion) return;
  console.log(currentQuestion);

  resetTimer ();
  startTimer();

// Update the UI
  answerOptions.innerHTML = "";
  nextQuestionBtn.style.visibility = "hidden";
  quizContainer.querySelector(".quiz-timer").style.background = "#0c0879"
  document.querySelector(".question-text").textContent = currentQuestion.question;
  questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

  // Create option <li> elements and append them 

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option;
    answerOptions.appendChild(li)
    li.addEventListener("click",() => handleAnswer(li, index))
  });
}

const startQuiz = () =>  {
  configContainer.style.display = "none"
  quizContainer.style.display = "block"

  quizCategory = configContainer.querySelector(".category-options.active").textContent;
  numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);
  renderQuestion();
}
 
// Highlight the selected option on click - category or no. of question
configContainer.querySelectorAll(".category-options, .question-option").forEach((option) => {
  option.addEventListener("click", () => {
    option.parentNode.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});

const resetQuiz = () => {
  resetTimer();
  correctAnswercount = 0;
  questionsIndexHistory.length = 0;
  configContainer.style.display = "block"
  resultContainer.style.display = "none"
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);