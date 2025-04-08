const timer = document.getElementById("timer");
let timerValue = parseInt(timer.textContent, 10);

function counter() {
  timerValue = timerValue - 1;
  timer.textContent = timerValue;
  if(timerValue > 0) {
    setTimeout(counter, 1000);
  }else {
    alert("Вы победили в конкурсе!");
  }
}

setTimeout(counter, 1000);