const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("November 1 2025 00:00:00").getTime();

document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.volume = 0.2;

    document.addEventListener("click", function() {

        
        if (bgMusic.paused) {
            bgMusic.play();
        }
    });
});


function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    console.log()

    if(distance < 0){
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);
