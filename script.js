// Preguntas del quiz
const questions = [
    {
        question: "¿Cuándo fue que nos vimos por primera vez en persona?",
        options: ["El 5 de agosto", "El 20 de abril", "El 10 de cada mes", "Ninguna de las anteriores"],
        correctAnswer: 0
    },
    {
        question: "¿Cuándo fue nuestra primera llamada?",
        options: ["El 1 de enero", "El 20 de abril", "El 5 de agosto", "El 10 de cada mes"],
        correctAnswer: 1
    },
    {
        question: "¿Nuestro día especial?",
        options: ["El 5 de cada mes", "El 20 de diciembre", "El 10 de cada mes", "El 25 de mayo"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        showFinalMessage();
    }
}

function displayQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const resultContainer = document.getElementById('result-container');
    const nextButton = document.getElementById('next-btn');

    // Mostrar la pregunta
    questionElement.innerHTML = questions[index].question;

    // Mostrar las opciones de respuesta
    const options = questionContainer.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = questions[index].options[i];
        options[i].className = 'option'; // Restablecer la clase
        options[i].style.pointerEvents = 'auto'; // Habilitar opciones
    }

    resultContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
}

function selectOption(optionElement, optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result-container');
    const nextButton = document.getElementById('next-btn');

    // Deshabilitar todas las opciones después de seleccionar una
    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = 'none';
    }

    // Comprobar si la respuesta es correcta
    if (optionIndex === currentQuestion.correctAnswer) {
        optionElement.classList.add('correct');
        resultContainer.innerHTML = "¡Correcto! ❤️";
    } else {
        optionElement.classList.add('incorrect');
        resultContainer.innerHTML = `Incorrecto. La respuesta correcta era: ${currentQuestion.options[currentQuestion.correctAnswer]}`;
    }

    resultContainer.classList.remove('hidden');
    nextButton.classList.remove('hidden');
}

function showFinalMessage() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const nextButton = document.getElementById('next-btn');
    const finalMessage = document.getElementById('final-message');

    questionContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    finalMessage.classList.remove('hidden');
}

// Cargar la primera pregunta al inicio
displayQuestion(0);