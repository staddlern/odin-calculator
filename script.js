let num1;
let num2;
let operation;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "Did you really think that was going to work?";
    }
    else {
        return a / b;
    }
}

function operate(a, b, c) {
    return c(a, b);
}

function updateNumber(a) {
    if (operation == null) {
        if (num1 == null) {
            num1 = a;
        }
        else {
            num1 = (num1 * 10) + a;
        }
    }
    else {
        if (num2 == null) {
            num2 = a;
        }
        else {
            num2 = (num2 * 10) + a;
        }
    }
    updateDisplay();
}

function clearCalculator() {
    num1 = 0;
    num2 = null;
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    displayText = num1;
    document.querySelector("#display-text").textContent = displayText;
}