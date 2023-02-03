let count = 0;
let num2;
let total;
let displayValue;
let operator;
const clearDisplay = () => display.textContent = '';

// ------ SELECTORS ------

let buttons = document.querySelectorAll('button');
let numbers = document.querySelectorAll('.numbers button');
let operations = document.querySelectorAll('.basic-operations button');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let sum = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('#equals');

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

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
        displayValue = (+display.textContent);
        if (count == 0) {
            total = displayValue;
        } else {
            num2 = displayValue;
        }

        switch (operator) {
            case 1:
                total += num2;
                break;
            case 2:
                total -= num2;
                break;
            case 3:
                total *= num2;
                break;
            case 4:
                total /= num2;
                break;    
            default:
                break;
        }
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        count = 1;
        return total;
    })
})

clear.addEventListener('click', () => {
    clearDisplay();
    count = 0;
    total = undefined;
    num2 = undefined;
    return count;
})

sum.addEventListener('click', () => {
    clearDisplay();
    operator = 1;
    return operator;
})

subtract.addEventListener('click', () => {
    clearDisplay();
    operator = 2;
    return operator;
})

multiply.addEventListener('click', () => {
    clearDisplay();
    operator = 3;
    return operator;
})

divide.addEventListener('click', () => {
    clearDisplay();
    operator = 4;
    return operator;
})

equals.addEventListener('click', () => {
    clearDisplay();
    display.textContent = total;
})
