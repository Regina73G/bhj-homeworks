const rotator = document.querySelectorAll(".rotator");
rotator.forEach((rotatorElement) => {
  const rotatorCase = rotatorElement.querySelectorAll(".rotator__case");
  let intervalId;

  function rotate() {
    clearInterval(intervalId);

    rotatorCase.forEach((rotatorCaseActive) => {
      rotatorCaseActive.classList.remove("rotator__case_active");
    });

    const randomIndexRotatorCase = Math.floor(Math.random() * rotatorCase.length);
    const rotatorCaseNew = rotatorCase[randomIndexRotatorCase];
    rotatorCaseNew.classList.add("rotator__case_active");
    rotatorCaseNew.style.color = rotatorCaseNew.dataset.color;

    let newSpeed = 1000;
    if (rotatorCaseNew.dataset.speed) {
      newSpeed = parseInt(rotatorCaseNew.dataset.speed, 10) || 1000;
    }
    //Запуск с новой скоростью
    intervalId = setInterval(rotate, newSpeed);
  }
//Первый запуск
  let initialSpeed = 1000;
  const speedActiveElement = rotatorElement.querySelector(".rotator__case_active");
  if(speedActiveElement) {
    initialSpeed = parseInt(speedActiveElement.dataset.speed, 10) || 1000;
  }

  intervalId = setInterval(rotate, initialSpeed);
});