let count = 0;
let numCount;
let decimalClicked = false;
let firstNumber;
let nextNumber;
let total;
let displayValue;
let operator;
const clearDisplay = () => display.textContent = '';

// ------ SELECTORS ------

let buttons = document.querySelectorAll('button');
let numbers = document.querySelectorAll('.numbers button');
let operations = document.querySelectorAll('.basic-operations button');
let display = document.querySelector('.display');
let backspace = document.querySelector('.backspace');
let clear = document.querySelector('.clear');
let sum = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('#equals');
let decimal = document.querySelector('.decimal');

// ------ LISTENERS ------

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('clicked');
    })
    button.addEventListener('mouseup', () => {
        setTimeout(() => button.classList.remove('clicked'), 75)
    })
    button.addEventListener('mouseleave', () => {
        setTimeout(() => button.classList.remove('clicked'), 75)
    })
});

decimal.addEventListener('click', () => {
    decimalClicked = true;
})

numbers.forEach(number => {
    number.addEventListener('click', () => {
        numCount++;
        if (count >= 2 && numCount == 1) {    
            clearDisplay();
        } 

        display.textContent += number.textContent;
        
        if (decimalClicked == true) {
            decimal.textContent = '';
        }
        
        displayValue = (+display.textContent);
        
        if (count == 0) {
            firstNumber = displayValue;
        } else {
            nextNumber = displayValue;
        }

        if (nextNumber == 0 && operator == 3 || operator == 4) {
            display.textContent = 'You know nothing will come of this...';
            setTimeout(() => {
                count = 0;
                total = undefined;
                firstNumber = undefined;
                nextNumber = undefined;
                operator = undefined; 
                clearDisplay(); 
            }, 2000);
        }

        switch (operator) {
            case 1:
                total = Math.round((firstNumber + nextNumber) * 10000) / 10000;
                break;
            case 2:
                total = Math.round((firstNumber - nextNumber) * 10000) / 10000;
                break;
            case 3:
                total = Math.round((firstNumber * nextNumber) * 10000) / 10000;
                break;
            case 4:
                total = Math.round((firstNumber / nextNumber) * 10000) / 10000;
                break;    
            default:
                break;
        }
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        count++;
        decimalClicked = false;
        decimal.textContent = '.';
        numCount = 0;
        if (count == 1) {
            clearDisplay();
        }
        else if (count > 1) {
            display.textContent = total;
            firstNumber = total;
        }
    })
})

backspace.addEventListener('click', () => {
    firstNumber = (+firstNumber.toString().slice(0,-1));
    display.textContent = firstNumber;
    total = firstNumber;
    displayValue = firstNumber;
})

clear.addEventListener('click', () => {
    count = 0;
    total = undefined;
    firstNumber = undefined;
    nextNumber = undefined;
    operator = undefined;
})

sum.addEventListener('click', () => {
    operator = 1;
    return operator;
})

subtract.addEventListener('click', () => {
    operator = 2;
    return operator;
})

multiply.addEventListener('click', () => {
    operator = 3;
    return operator;
})

divide.addEventListener('click', () => {
    operator = 4;
    return operator;
})

equals.addEventListener('click', () => {
    count = 0;
})
