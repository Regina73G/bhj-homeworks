let xhr = new XMLHttpRequest();
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

function loadPool() {
  xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
    showPoll();
    handleAnswerClick();
  });
  xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
  xhr.send();
}

function showPoll() {
  const data = JSON.parse(xhr.responseText);
  const title = data.data.title;
  const answers = data.data.answers;
   //добавление вопроса и кнопок
  pollTitle.innerHTML = `${title}`;
  pollAnswers.innerHTML = answers.map(answer => `
    <button class="poll__answer">
      ${answer}
    </button>
  `).join("");
}

function handleAnswerClick() {
  const answerButtons = document.querySelectorAll('.poll__answer');
  answerButtons.forEach((answer) => {
    answer.addEventListener("click", () => {
      alert("Спасибо, ваш голос засчитан!");
      loadPool(); //обновляем запрос
    })
  });
}

loadPool();