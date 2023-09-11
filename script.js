//start button function
// function startStopwatch (start){
//     const startStopwatch = document.getElementsByClassName('start');
//     const stopStopwatch = document.getElementsByClassName('stop');

//     if (startStopwatch) {
//         for(i = 0; i < Number; i ++){
//             return;
//         }else{
//             if(stopStopwatch){
//                 start == 0;
//             };
//         };
//     };
// };
let timer; //This variable will hold the interval ID for the timer.


function startStopwatch(){
    clearInterval(timer); //Clear any previous intervals to prevent multiple timers.

    let startTime = Date.now(); //get the current time in milliseconds

    timer = setInterval(function (){
        const elapsedTime = Date.now() - startTime;
        updateDisplay(elapsedTime);
    }, 100);
}

function stopStopwatch(){
    clearInterval(timer); //stop the time interval
};

function resetStopwatch(){
    clearInterval(timer);
    updateDisplay(0);
}

function updateDisplay(elapsedTime){
    const display = document.getElementById('display');
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const hours = Math.floor(elapsedTime / 60);

    const formattedTime = `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}`;
    display.textContent = formattedTime;
}

function pad(num){
    return num.toString().padStart(2, '0');
}