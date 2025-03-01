const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');
let targetDate;
let countdownTimer;
//const targetDate = new Date().getTime();


document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.volume = 0.2;


    document.addEventListener("click", function() {
        bgMusic.play();
        if(TimesUpMusic.play()){
            bgMusic.stop();
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
        document.getElementById("count").innerText ="Time is Up!!"
        clearInterval(countdownTimetimer);
        timesUpMusic.play();
    }
}

function getInput(){
    const D1 = parseInt(document.getElementById("d1").value) || 0;
    const D2 = parseInt(document.getElementById("d2").value) || 0;
    const D3 = parseInt(document.getElementById("d3").value) || 0;
    const D4 = parseInt(document.getElementById("d4").value) || 0;

    const totalMs = 
        (D1 * 24 * 60 * 60 * 1000) +
        (D2 * 60 * 60 * 1000) +
        (D3 * 60 * 1000) +
        (D4 * 1000);
    
    targetDate = new Date().getTime()+totalMs;
    clearInterval(countdownTimer);
    countdownTimer = setInterval(timer, 1000);
    
    //timesUp();

}

function timesUp(){
    const TimesUpMusic = new Audio("2.mp3");
    TimesUpMusic.volume = 0.1;
    TimesUpMusic.play();
}