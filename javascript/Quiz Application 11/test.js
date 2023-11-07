const questions = [
    {
        question: "What is JavaScript?",
        options: [
            "JavaScript is a programming language used for web development",
            "JavaScript is a type of coffee",
            "JavaScript is used for designing graphics",
            "JavaScript is a markup language*"
        ],
        correctAnswer: 3
    },
    {
        question: "Which statement correctly defines a JavaScript variable?",
        options: [
            "int x = 5;",
            "var x = 5;",
            "variable x = 5;",
            "let x = 5;*"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the console.log() function in JavaScript?",
        options: [
            "To prompt the user for input",
            "To display messages in the browser console*",
            "To create a pop-up dialog",
            "To perform mathematical calculations"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the output of 5 + '5' in JavaScript?",
        options: ["10", "55*", "5", "\"55\""],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a correct way to comment in JavaScript?",
        options: [
            "/* This is a comment */",
            "// This is a comment*",
            "<!-- This is a comment -->",
            "# This is a comment"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary purpose of the if statement in JavaScript?",
        options: [
            "To declare a variable",
            "To create a function",
            "To loop through an array",
            "To make a decision or test a condition*"
        ],
        correctAnswer: 3
    },
    {
        question: "Which symbol is used for strict equality in JavaScript?",
        options: ["=", "==", "===", "*!=",],
        correctAnswer: 2
    },
    {
        question: "What does the DOM stand for in web development?",
        options: [
            "Document Object Model*",
            "Domain Object Model",
            "Digital Object Model",
            "Dynamic Object Management"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you select an HTML element with the id attribute of 'myElement' using JavaScript?",
        options: [
            "getElementByClass('myElement')",
            "selectElement('myElement')",
            "getElementById('myElement')*",
            "selectById('myElement')"
        ],
        correctAnswer: 2
    },
    {
        question: "What does the addEventListener method do in JavaScript?",
        options: [
            "It adds two numbers together",
            "It includes an external JavaScript file",
            "It attaches an event handler to an HTML element*",
            "It creates a new HTML element"
        ],
        correctAnswer: 2
    },
    {
        question: "Which function is used to convert a string to an integer in JavaScript?",
        options: ["parseInt*", "toFloat", "convertToInt", "toInteger"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the localStorage object in JavaScript?",
        options: [
            "To create dynamic HTML content",
            "To store data in a user's web browser for future use*",
            "To style HTML elements",
            "To define variables in JavaScript"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a JavaScript framework or library for building user interfaces?",
        options: ["Angular", "jQuery", "React*", "Bootstrap"],
        correctAnswer: 2
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        options: ["let", "var", "const*", "const var"],
        correctAnswer: 2
    },
    {
        question: "What does AJAX stand for in web development?",
        options: [
            "Asynchronous JavaScript and XML*",
            "Advanced JavaScript and XHTML",
            "Active Java and XML",
            "Automated JavaScript and XAML"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the return statement in a JavaScript function?",
        options: [
            "To display a message to the user",
            "To stop the function from executing",
            "To exit a loop",
            "To specify the value that the function should return when called*"
        ],
        correctAnswer: 3
    },
    {
        question: "Which operator is used to concatenate strings in JavaScript?",
        options: ["+*", "-*", "**", "/"],
        correctAnswer: 0
    },
    {
        question: "What does JSON stand for in JavaScript?",
        options: [
            "JavaScript Object Notation*",
            "Java Serialized Object Notation",
            "JavaScript Organizational Notation",
            "JavaScript Standard Object Name"
        ],
        correctAnswer: 0
    },
    {
        question: "How can you round a number to the nearest integer in JavaScript?",
        options: ["ceil()", "round()*", "floor()", "trunc()"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the for loop in JavaScript?",
        options: [
            "To declare variables",
            "To create functions",
            "To perform a specific task a certain number of times*",
            "To write comments in code"
        ],
        correctAnswer: 2
    }
];


const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const timeSpan = document.getElementById("time");
const scoreSpan = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 60; // Set the time limit (in seconds) for the test.

function startTest() {
    showQuestion();
    updateTimer();
    setInterval(updateTimer, 1000);
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsList.innerHTML = "";

        for (let i = 0; i < currentQuestion.options.length; i++) {
            const option = currentQuestion.options[i];
            const listItem = document.createElement("li");
            listItem.textContent = option;
            listItem.addEventListener("click", () => checkAnswer(i));
            optionsList.appendChild(listItem);
        }
    } else {
        endTest();
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function updateTimer() {
    if (timeRemaining <= 0) {
        endTest();
    } else {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timeSpan.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        timeRemaining--;
    }
}

function endTest() {
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    scoreSpan.textContent = score;
    document.getElementById("result").style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});

startTest();
