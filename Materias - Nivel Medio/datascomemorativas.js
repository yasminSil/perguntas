const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
  }
}
function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Em que dia é comemorado o dia das mães?",
    answers: [
      { text: "8/06", correct: false },
      { text: "9/01", correct: false },
      { text: "]9/05", correct: true },
      { text: "9/04", correct: false }
    ]
  },
  {
    question: "O que se comemora no dia 21 de Abril??",
    answers: [
      { text: "Tiradentes", correct: true },
      { text: "Páscoa", correct: false },
      { text: "Natal", correct: false },
      { text: "Confraternização Universal", correct: false }
    ]
  },
  {
    question: 'O que comemoramos no dia 15/11? "',
    answers: [
      { text: 'Proclamação da Repulblica.">', correct: true },
      { text: 'Dia dos Pais.">', correct: false },
      { text: 'Independência do Brasil. ">', correct: false },
      { text: "Dia das Crianças.", correct: false },
    ]
  },
  {
    question: 'Em que data é comemorado o dia da Paixão??',
    answers: [
      { text: 'msg(04/04);', correct: false },
      { text: 'alert( 02/04);', correct: true },
      { text: 'msgBox(13/04);', correct: false },
      { text: 'alertBox(21/04);', correct: false }
    ]
  },
  {
    question: 'Em que data é comemorado o dia da Paixão??',
    answers: [
      { text: 'msg(04/04);', correct: false },
      { text: 'alert( 02/04);', correct: true },
      { text: 'msgBox(13/04);', correct: false },
      { text: 'alertBox(21/04);', correct: false }
    ]
  },
  {
    question: 'Em que data é comemorado o dia da Paixão??',
    answers: [
      { text: 'msg(04/04);', correct: false },
      { text: 'alert( 02/04);', correct: true },
      { text: 'msgBox(13/04);', correct: false },
      { text: 'alertBox(21/04);', correct: false }
    ]
  },
  {
    question: 'Quаіѕ аѕ trêѕ соmеmоrаçõеѕ dе аbrіl??',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
  {
    question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
  {
    question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  }
]