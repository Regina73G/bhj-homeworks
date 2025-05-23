const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.upload.onprogress = (event) => {
    if(event.lengthComputable) {
      const percentComplet = (event.loaded / event.total);
      progress.value = percentComplet;
    }
  }

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      progress.value = 1;
    }
  }

  xhr.onerror = () => {
      console.error("Ошибка загрузки");
      progress.value = 0;
  }

  xhr.send(formData);
});