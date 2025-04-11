const timer = document.getElementById("timer");
let timerValue = parseInt(timer.textContent, 10);

function counter() {
  timerValue = timerValue - 1;
  timer.textContent = timerValue;
  if(timerValue >= 0) {
    setTimeout(counter, 1000);
  }else {
    timer.textContent = 0;
    alert("Вы победили в конкурсе!");
    downloadFile();
  }
}

counter();


// -------------------Повышенный уровень сложности #1

// const timer = document.getElementById("timer");
// let timerValue = "";

// function setTimerValue(hours, minutes, seconds) {
//   const hoursFormatted = String(hours).padStart(2, "0");
//   const minutesFormatted = String(minutes).padStart(2, "0");
//   const secondsFormatted = String(seconds).padStart(2, "0");
//   timerValue = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
//   timer.textContent = timerValue;
// }

// function counterNewFormat() {
//   let [hours, minutes, seconds] = timerValue.split(":").map(Number);
//   seconds--;
//   if(seconds < 0) {
//     seconds = 59;
//     minutes--;
//     if(minutes < 0) {
//       minutes = 59;
//       hours--;
//       if(hours < 0) {
//         hours = 0;
//         minutes = 0;
//         seconds = 0;
//         alert("Вы победили в конкурсе!");
//         downloadFile();
//         return;
//       }
//     }
//   }

//   setTimerValue(hours, minutes, seconds);
//   setTimeout(counterNewFormat, 1000);
// }

// setTimerValue(1, 2, 2);
// counterNewFormat();


// -------------------Повышенный уровень сложности #2

function downloadFile() {
  let file = "download.zip";
  window.location.href = file;
}
