let num1 = 0;
let num2 = 0;
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