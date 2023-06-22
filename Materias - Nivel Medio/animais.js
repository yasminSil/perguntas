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

const questions = [
  {
    question: "Qual é o maior animal terrestre?",
    answers: [
      { text: "Elefante indiano", correct: false },
      { text: "Elefante africano", correct: false },
      { text: "Rinoceronte branco>", correct: true },
      { text: "Leão africano", correct: false },
      { text: "Baleia azul", correct: false },
    ]
  },
  {
    question: "Qual dessas cobras não é venenosa?",
    answers: [
      { text: "Sucuri", correct: true },
      { text: "Jararaca", correct: false },
      { text: "Rei marrom", correct: false },
      { text: "Cascavel", correct: false },
      { text: "Surucucu", correct: false },
    ]
  },
  {
    question: 'Qual o maior felino?"',
    answers: [
      { text: 'Tigre siberiano', correct: true },
      { text: '<Gato dourado Asiatico">', correct: false },
      { text: '<Leopardo Negro">', correct: false },
      { text: "Caracal", correct: false },
    ]
  },

  {
    question: 'Qual o animal mais rápido do mundo?',
    answers: [
      { text: 'msg(Leopardo);', correct: false },
      { text: 'alert(Guepardo);', correct: true },
      { text: 'msgBox(Gato da pérsia);', correct: false },
      { text: 'alertBox(Tigre);', correct: false }
    ]
  },
  {
    question: 'Qual a maior raça de cachorro?',
    answers: [
      { text: 'function:myFunction(Pitbull)', correct: false },
      { text: 'function myFunction(Kangal)', correct: true },
      { text: 'function = myFunction(Mastiff)', correct: false },
      { text: 'Buldogue gigante da África', correct: false }
    ]
  },
  {
    question: 'Qual o animal que mais mata humanos no mundo?',
    answers: [
      { text: 'call minhaFuncao(Cobra)', correct: false },
      { text: 'call function minhaFuncao(Tigre)', correct: false },
      { text: 'Hipopótamo', correct: false },
      { text: 'minhaFuncao(Mosquito)', correct: true },
    ]
  },
  {
    question: 'Qual animal simboliza o imposto de renda?',
    answers: [
      { text: 'call minhaFuncao(Onça)', correct: false },
      { text: 'call function minhaFuncao(Tartaruga)', correct: false },
      { text: 'Tubarão', correct: false },
      { text: 'minhaFuncao(Leão)', correct: true },
    ]
  },
  {
    question: 'Animais onívoros comem o quê?"?',
    answers: [
      { text: 'call minhaFuncao(Carne)', correct: false },
      { text: 'call function minhaFuncao(Plantas)', correct: false },
      { text: 'Frutas', correct: false },
      { text: 'minhaFuncao(Tudo)', correct: true },
    ]
  },
  {
    question: 'Ursos são excelentes caçadores que caçam veados, alces, peixes, corvos,"?',
    answers: [
      { text: 'call minhaFuncao(V)', correct: false },
      { text: 'call function minhaFuncao(F)', correct: true },
    
    ]
  },
{
  question: 'Animais onívoros comem o quê?"?',
  answers: [
    { text: 'call minhaFuncao(Carne)', correct: false },
    { text: 'call function minhaFuncao(Plantas)', correct: false },
    { text: 'Frutas', correct: false },
    { text: 'minhaFuncao(Tudo)', correct: true },
  ]
}
]