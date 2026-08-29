// ------------------ time ------------------------------
const stopwatchEI = document.getElementById('stopwatch')

// -------------------- question & answer ---------------------
const game = document.querySelector('.game');
const question = document.getElementById('question')
const evaluation = document.getElementById('result')
const answer = document.getElementById('answer')
const timerEI = document.getElementById('timer')

// ------------------- buttons ----------------------------
const startEI = document.getElementById('start')
const resetEI = document.getElementById('reset')
const submitEI = document.getElementById('submit')


// =========================== StopWatch ================================
// initializing the time variables
let interval;
let time = 0;

// start the stoptime
function updateStopwatch(){
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(( time % 3600 ) / 60 );
    let seconds = time % 60;

    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    stopwatchEI.innerHTML = formattedTime;
}


function startStopwatch(){
    interval = setInterval(() => {
	time++
	updateStopwatch()
    }, 1000)
}

// reset the stoptime
function resetTime(){
    clearInterval(interval);
    time = 0;
    updateStopwatch()
}

// ============================== Timer ================================
let timer = 15;
let timer_interval

function startTimer(){
    timer_interval = setInterval(() => {
        timer--
        timerEI.innerHTML = `${timer.toString().padStart(2, 0)}`

        if(timer == 0){
            clearInterval(timer_interval)

            evaluation.style.display = 'block';
            evaluation.textContent = "Time is Up";
            evaluation.className = 'wrong'
            submitEI.disabled = true
            
            setTimeout(() => {
                evaluation.textContent = "";
                evaluation.style.display = 'none';
                evaluation.className = "";
                answer.value = "";

                timer = 15
                timerEI.innerHTML = `${timer.toString().padStart(2, 0)}`


                resetTimer()
                startTimer()
                generateQuestion();
                submitEI.disabled = false
            }, 3000)
        }
    }, 1000)
}

function resetTimer(){
    clearInterval(timer_interval)
    timer = 15

    timerEI.innerHTML = `${timer.toString().padStart(2, 0)}`
}


// ============================= Game Question and Input ===================
let result;
function checkAnswer(){
    const inputAnswer = +answer.value
    evaluation.style.display = 'block';
    submitEI.disabled = true

    if(result == inputAnswer){
        evaluation.textContent = 'Correct!!'
        evaluation.className = 'correct'
    }else{
        evaluation.textContent = `Wrong, the answer is ${result}`
        evaluation.className = 'wrong'
    }

    // clear the timer interval
    clearInterval(timer_interval)

    setTimeout(() => {
        evaluation.textContent = "";
        evaluation.style.display = 'none';
        answer.value = "";

        resetTimer();
        startTimer();

        generateQuestion();
        submitEI.disabled = false
    }, 3000)
}
const generateNumber = (num) => Math.floor(Math.random() * num);

function generateQuestion(){
    const num1 = generateNumber(100)
    const num2 = generateNumber(100)
    const operations = ['+', '-', '*', '/']
    let index = generateNumber(operations.length)

    switch(operations[index]){
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': 
            if(num2 == 0)
                while(num2!=0)
                    num2 = generateNumber(100)
            result = num1 / num2;
            break;
    }

    question.innerHTML = `Question: ${num1} ${operations[index]} ${num2} is`
}


// ============================= Button Event Handler ======================
// Start button is pressed
startEI.addEventListener('click', function(){
    startStopwatch();
    startEI.disabled = true;
    submitEI.disabled = false;
    resetEI.disabled = false;
    stopwatchEI.style.display = 'block';
    game.style.display = 'block';
    generateQuestion();
    startTimer();
});


// Reset button is pressed
resetEI.addEventListener('click', function(){
    resetTime();
    resetTimer()

    stopwatchEI.style.display = 'none';
    game.style.display = 'none';

    startEI.disabled = false;
    resetEI.disabled = true;
    submitEI.disabled = true;
});

submitEI.addEventListener('click', () => {
    
    checkAnswer();
    
})
