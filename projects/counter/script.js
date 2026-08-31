const counter_value = document.getElementById('counter-value')
const button = document.getElementById('counter')
const resetButton = document.getElementById('reset-counter')

let counter = 0
button.addEventListener('click', () => {
     counter_value.classList.remove('blink');

    // Force the browser to reflow so the animation can restart
    void counter_value.offsetWidth;   

    counter = counter + 1 
    counter_value.textContent = `${counter}`

    counter_value.classList.add('blink')
});

resetButton.addEventListener('click', () => {
    counter = 0 
    counter_value.textContent = `${counter}`
})
