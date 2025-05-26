const signinForm = document.getElementById("signin__form");
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userIdElement = document.getElementById('user_id');

const storedUserId = localStorage.getItem('user_id');
if (storedUserId) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userIdElement.textContent = storedUserId;
}

signinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(signinForm);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = xhr.response;
      if (response.success) {
        const userId = response.user_id;
        localStorage.setItem('user_id', userId);
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userIdElement.textContent = userId;
      } else {
        alert('Неверный логин/пароль');
      }
    }
  }

  xhr.onerror = () => {
    alert('Произошла ошибка сети');
  };

  xhr.send(formData);
});