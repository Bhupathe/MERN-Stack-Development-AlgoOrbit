const startEI = document.getElementById('start')
const stopEI = document.getElementById('stop')
const resetEI = document.getElementById('reset')
const stopwatchEI = document.getElementById('stopwatch')

let interval;
let time = 0;

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


function stopTime(){
    clearInterval(interval)
}

function resetTime(){
    clearInterval(interval);
    time = 0;
    updateStopwatch()
}

startEI.addEventListener('click', function(){
    startStopwatch();
    startEI.disabled = true;

    resetEI.disabled = false;
    stopEI.disabled = false;
});
stopEI.addEventListener('click', function(){
    stopTime();

    stopEI.disabled = true;
    startEI.disabled = false;
    resetEI.disabled = false;
});
resetEI.addEventListener('click', function(){
    resetTime();

    startEI.disabled = false;
    resetEI.disabled = true;
    stopEI.disabled = true;
});
