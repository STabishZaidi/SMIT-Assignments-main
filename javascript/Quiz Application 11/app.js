// Get references to HTML elements
const questionTextarea = document.getElementById("questionTextarea");
const updateButton = document.getElementById("updateButton");
const displayArea = document.getElementById("displayArea");

// Add an event listener to the update button
updateButton.addEventListener("click", function () {
    // Get the content from the textarea
    const content = questionTextarea.value;

    // Display the content as-is in the display area
    displayArea.textContent = content;
});
