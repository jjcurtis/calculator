let count = 0;
let values = [];
let getNumber = () => parseFloat(display.textContent);
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const clear = () => display.textContent = '';

// ------ SELECTORS ------

let buttons = document.querySelectorAll('button');
let numbers = document.querySelectorAll('.numbers button');
let operations = document.querySelectorAll('.basic-operations button');
let display = document.querySelector('.display');
let sum = document.querySelector('.add');
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
    })
})

sum.addEventListener('click', () => {
   
    return values;
})

equals.addEventListener('click', () => {
    
})
