const display = document.querySelector('.display');
const buttonsNumber = document.querySelectorAll('.button-number');
const buttonsOperator = document.querySelectorAll('.button-operator');

let numOne = 0;
let numTwo = 0;
let operator = '';

buttonsOperator.forEach( (button) => {
    button.addEventListener('click', );
});

buttonsNumber.forEach( (button) => {
    button.addEventListener('click', (e) => {
        setDisplayValue(e.target.textContent);
    });
});

function setDisplayValue(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function getDisplayValue() {
    return +display.textContent;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            substract(a, b);
            break;
        case 'x':
            multiply(a, b);
            break;
        case '÷':
            divide(a, b);
            break;
    }
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}