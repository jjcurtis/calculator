// ------ SELECTORS ------

let buttons = document.querySelectorAll('button');
let numbers = document.querySelectorAll('.numbers button')
let display = document.querySelector('.display');

//============================================//


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
