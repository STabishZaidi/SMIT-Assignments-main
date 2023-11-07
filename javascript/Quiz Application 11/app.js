// // Get references to HTML elements
// const questionTextarea = document.getElementById("questionTextarea");
// const updateButton = document.getElementById("updateButton");
// const displayArea = document.getElementById("displayArea");

// // Add an event listener to the update button
// updateButton.addEventListener("click", function () {
//     // Get the content from the textarea
//     const content = questionTextarea.value;

//     // Display the content as-is in the display area
//     displayArea.textContent = content;
//    value.text.length       
// });

// function submit (){
//     var text = document.getElementById("text")
//     var questions = [];
//     var obj = {};
//     var value = text.value.split("\n");
//     var count = 1;
// for (var i = 0; i < value.length; i++ ) {
//     if(value[i] === ""){
//         questions.push(obj);
//         obj ={};
//         count = 1;
//     } else {  
//         if (value[i].lastIndexof("?") !== -1) {
//         obj.question = value[i];
//     } else {
//         if (value[1].lastIndexof("*") !== -1) {
//             obj.answer = value[i].slice(0, -1);
//             obj['option' + count] = value[i].slice(0, -1);
//         }else{
//             obj['option' + count] = value[i]
//         }
//         count ++
//     }
// }


// }
// console.log (obj)

// }



// Sir Ghous Class 


function submit() {
    var text = document.getElementById("text");
    var questions = [];
    var obj = {};
    var value = text.value.split("\n");
    var count = 1;
    for (var i = 0; i < value.length; i++) {
        if (value[i] === "") {
            questions.push(obj);
            obj = {};
            count = 1;
        } else {
            if (value[i].lastIndexOf("?") !== -1) { 
                obj.question = value[i];
            } else {
                if (value[i].lastIndexOf("*") !== -1) { 
                    obj.answer = value[i].slice(0, -1);
                    obj['option' + count] = value[i].slice(0, -1);
                } else {
                    obj['option' + count] = value[i];
                }
                count++;
            }
        }
    }
    console.log(questions); ns
}



// Define an array to store the questions and options
var questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris*", "Rome"],
    },
    {
      question: "Which programming language is known for its use in web development?",
      options: ["Java", "Python", "JavaScript*", "C++"],
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars*", "Jupiter", "Venus"],
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale*", "Hippopotamus"],
    },
  ];
  
  // Function to check the answers
  function checkAnswer(questionIndex, selectedOption) {
    var correctAnswer = questions[questionIndex].options.indexOf(questions[questionIndex].question + "*");
    if (selectedOption === correctAnswer) {
      return "Correct";
    } else {
      return "Incorrect";
    }
  }
  
  // Example usage:
  var selectedOption = 2; // Assuming the user selected the third option (0-indexed) for the first question
  var questionIndex = 0; // Assuming you want to check the first question
  var result = checkAnswer(questionIndex, selectedOption);
  console.log(result); // Should output "Correct" for this example
  