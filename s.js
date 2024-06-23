
let startTime, updateInterval;
let running = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const timeDisplay = document.getElementById('time');

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - (startTime || 0);
        updateInterval = setInterval(updateStopwatch, 1000);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(updateInterval);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(updateInterval);
    running = false;
    startTime = 0;
    timeDisplay.textContent = '00:00:00';
}

function updateStopwatch() {
    const elapsedTime = Date.now() - startTime;
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    const formattedTime = 
        String(hours).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    timeDisplay.textContent = formattedTime;
}
