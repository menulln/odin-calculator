const display = document.querySelector('.display');
const buttonsNumber = document.querySelectorAll('.button-number');



buttonsNumber.forEach( (button) => {
    button.addEventListener('click', setDisplayValue);
});

function setDisplayValue(e) {
    if (display.textContent === '0') {
        display.textContent = e.target.textContent;
    } else {
        display.textContent += e.target.textContent;
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
        case '*':
            multiply(a, b);
            break;
        case '/':
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