document.getElementById('colorPicker').addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();  // initial call to display the clock immediately
