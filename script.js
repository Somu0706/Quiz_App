//quiz questions and options
const questions = [
    {
        question: "1.Select the appropriate HTML tag for inserting a line break?",
        options: ["br", "ib", "break", "None of the above"],
        correct: 0
    },
    {
        question: "2.In CSS, choose the correct option to select this image by its id?<img id=”mainpic” src=”cat.png”>",
        options: [".mainpic { }", "img { }", "mainpic { }","#mainpic { }"],
        correct: 3
    },
    {
        question: "3.In CSS,Select the property used to set the spacing in between lines of text?",
        options: ["letter-spacing", "line-spacing", "spacing", "line-height"],
        correct: 3
    },
    {
        question: "4.Select the correct HTML tag to make a text italic?",
        options: [" It", "Italic", "I", "II"],
        correct: 2
    },
    {
        question: "5.In CSS, what is the correct option to select all the tags on a page?",
        options: ["<p> { }", " p { }", "#p { }", "All of the above"],
        correct: 1
    },
    {
        question: "6.In CSS,select the property used to set the background color of an image?",
        options: [" background:color", "background-color", "color", "color:background"],
        correct: 1
    },
    {
        question: "7.Select the option to make a list that lists the items with bullets?",
        options: ["Ol", "List", "DL", "Ul"],
        correct: 2
    },
    {
        question: "8.Select the appropriate HTML tag used for the largest heading?",
        options: [" Heading", "H6", "H1", "Head"],
        correct: 2
    },
    {
        question: "9.Select the option to make a list that lists the items with numbers?",
        options: ["Ul", "List", "Dl", "Ol"],
        correct: 3
    },
    {
        question: "10.Select the property that is used to create spacing between HTML elements?",
        options: ["margin", "spacing", "padding", "border"],
        correct: 2
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = document.createElement("button");
        option.textContent = currentQuestion.options[i];
        option.addEventListener("click", checkAnswer.bind(null, i));
        optionsElement.appendChild(option);
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.disabled = true;
    scoreElement.textContent = `Your score is : ${score} / ${questions.length}`;

    // Display GIFs based on the score threshold
    const gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");

    if (score >= 7) {
        // Display winning gif
        const winningGif = document.createElement("img");
        winningGif.src = "giphy.gif"; // the winning gif
        winningGif.alt = "Winning GIF";
        gifContainer.appendChild(winningGif);
    } else {
        // Display losing gif
        const losingGif = document.createElement("img");
        losingGif.src = "giphy (1).gif"; //the losing gif
        losingGif.alt = "Losing GIF";
        gifContainer.appendChild(losingGif);
    }

    optionsElement.appendChild(gifContainer);
}
nextButton.addEventListener("click", loadQuestion);

// Initialization the quiz
loadQuestion();