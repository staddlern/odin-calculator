let num1 = 0;
let num2;
let operation;
let result = false;

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
    if (result == true) {
        clearCalculator();
        result = false;
        num1 = a;
    }
    else if (operation == null) {
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
    if (num2 != null) {
        calculate();
    }
    operation = a;
    result = false;
    updateDisplay();
}

function backspaceNumber() {
    if (operation == null) {
        if (num1 >= 10) {
            num1 = (num1 - (num1 % 10))/10;
        }
        else {
            num1 = 0;
        }
    }
    else {
        if (num2 >= 10) {
            num2 = (num2 - (num2 % 10))/10;
        }
        else {
            num2 = 0;
        }
    }
    updateDisplay();
}

function calculate() {
    if (num1 != null && operation != null && num2 != null) {
        num1 = Math.floor(operate(num1, num2, operation) * 10000)/10000;
        num2 = null;
        operation = null;
        result = true;
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