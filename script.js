let num1 = 0;
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

function updateOperation(a) {
    operation = a;
    updateDisplay();
}

function calculate() {
    if (num1 != null && operation != null && num2 != null) {
        num1 = operate(num1, num2, operation);
        num2 = null;
        operation = null;
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
    if (operation != null) {
        if (operation == add) {
            displayText += " + "
        }
        else if (operation == subtract) {
            displayText += " - "
        }
        else if (operation == multiply) {
            displayText += " x "
        }
        else if (operation == divide) {
            displayText += " / "
        }
        if (num2 != null) {
            displayText += num2;
        }
    }
    document.querySelector("#display-text").textContent = displayText;
}