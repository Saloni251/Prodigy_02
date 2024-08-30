let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let millisecondsDisplay = document.getElementById('milliseconds');

let interval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function updateDisplay() {
    millisecondsDisplay.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
}

function startTimer() {
    interval = setInterval(() => {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
    startTimer();
});

stopButton.addEventListener('click', () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    stopTimer();
});

resetButton.addEventListener('click', () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    resetTimer();
});
