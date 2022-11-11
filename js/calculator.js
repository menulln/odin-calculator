const display = document.querySelector('.display');
const buttonsNumber = document.querySelectorAll('.button-number');
const buttonsOperator = document.querySelectorAll('.button-operator');
const buttonEquals = document.querySelector('.button-equals');
const buttonClear = document.querySelector('.button-clear');
const buttonBack = document.querySelector('.button-back');
const buttonDot = document.querySelector('.button-dot');

let result = 0;
let numOne = 0;
let numTwo = 0;
let operator = '';

buttonEquals.addEventListener('click', (e) => {
    if (numOne !== 0 && operator !== '') {
        numTwo = getDisplayValue();
        result = Math.floor(operate(operator, numOne, numTwo));
        clearDisplay();
        setDisplayValue(result);
        numOne = 0;
        numTwo = 0;
        operator = '';
    }
});

buttonsOperator.forEach( (button) => {
    button.addEventListener('click', (e) => {
        if (numOne === 0 && result === 0) {
            numOne = getDisplayValue();
            clearDisplay();
            operator = e.target.textContent;
        } else if (operator !== '') {
            numTwo = getDisplayValue();
            clearDisplay();
            result = Math.floor(operate(operator, numOne, numTwo));
            setDisplayValue(result);
            numOne = 0;
            numTwo = 0;
            operator = e.target.textContent;
        } else if (numOne !== 0) {
            numTwo = getDisplayValue();
            operator = e.target.textContent;
            clearDisplay();
            result = Math.floor(operate(operator, numOne, numTwo));
            setDisplayValue(result);
            numOne = 0;
            numTwo = 0;
            operator = '';
        } else if (result !== 0) {
            numOne = getDisplayValue();
            operator = e.target.textContent;
            result = Math.floor(operate(operator, numOne, numTwo));
            clearDisplay();
            setDisplayValue(result);
        }
    });
});

buttonsNumber.forEach( (button) => {
    button.addEventListener('click', (e) => {
        if (result === 0) {
            setDisplayValue(e.target.textContent);
        } else {
            numOne = result;
            result = 0;
            clearDisplay();
            setDisplayValue(e.target.textContent);
        }
    });
});

buttonClear.addEventListener('click', (e) => {
    numOne = 0;
    numTwo = 0;
    result = 0;
    operator = '';
    clearDisplay();
});

buttonBack.addEventListener('click', (e) => {
    const displayValue = getDisplayValue().toString();
    clearDisplay();
    setDisplayValue(`${displayValue.substring(0, displayValue.length - 1)}`);
    if (getDisplayValue().toString() === '0') {
        setDisplayValue('0');
    }
});

buttonDot.addEventListener('click', (e) => {
    const re = /[.]/;
    if (display.textContent.match(re)) {
        return;
    } else {
        setDisplayValue('.');
    }
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

function clearDisplay() {
    display.textContent = '0';
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return substract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '÷':
            return divide(a, b);
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