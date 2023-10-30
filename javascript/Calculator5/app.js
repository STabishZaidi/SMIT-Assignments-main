let operators = "+-*/";
let lastOperatorIndex = -1;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    if (operators.includes(value)) {
        if (lastOperatorIndex !== -1) {
            // Replace the previous operator
            display.value = display.value.substring(0, lastOperatorIndex) + value;
        } else {
            display.value += value;
        }
        lastOperatorIndex = display.value.lastIndexOf(value);
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    lastOperatorIndex = -1;
}

function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    lastOperatorIndex = -1;
}
