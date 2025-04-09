const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
let countValue = parseInt(clickerCounter.textContent, 10);

cookie.addEventListener('click', function(event) {
  if(event) {
    countValue += 1;
    clickerCounter.textContent = countValue;
    if(cookie.width === 200) {
      cookie.width = 180;
      cookie.height = 115;
    }else {
      cookie.width = 200;
      cookie.height = getRandomNumber();
    }
  }
});

function getRandomNumber() {
  let min = 115, 
    max = 130;
    return Math.floor(Math.random() * (max - min) + min);
}