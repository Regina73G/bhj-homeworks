const deadCounter = document.getElementById("dead");
let deadtCountValue = parseInt(deadCounter.textContent, 10);
const lostCounter = document.getElementById("lost");
let lostCountValue = parseInt(lostCounter.textContent, 10);
const holes = document.querySelectorAll(".hole");

holes.forEach(hole => {
  hole.addEventListener('click', function(event) {
    if(event) {
      if(hole.className.includes("hole_has-mole")) {
        deadtCountValue += 1;
        deadCounter.textContent = deadtCountValue;
      }else {
        lostCountValue += 1;
        lostCounter.textContent = lostCountValue;
      }
    }

    if(deadtCountValue >= 10) {
      alert("Победа!");
      newGame();
      return
    }else if (lostCountValue >= 5) {
      alert("Вы проиграли!");
      newGame();
      return
    }
  });
});

function newGame() {
  deadtCountValue = 0;
  lostCountValue = 0;
  deadCounter.textContent = 0;
  lostCounter.textContent = 0;
}