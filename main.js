// ------ SELECTORS ------

let buttons = document.querySelectorAll('button');

//============================================//


// ------ LISTENERS ------

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.className = 'clicked';
    })
    button.addEventListener('mouseup', () => {
        button.className = 'clicked';
        setTimeout(() => button.classList.remove('clicked'), 50)
    })
    button.addEventListener('mouseleave', () => {
        setTimeout(() => button.classList.remove('clicked'), 50)
    })
});