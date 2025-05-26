const popup = document.getElementById("subscribe-modal");
const popupClose = document.querySelector(".modal__close");

let popupStatus = true;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return undefined;
}

function showPopup() {
  popup.classList.add("modal_active");
}

popupClose.addEventListener("click", () => {
  popup.classList.remove("modal_active");
  document.cookie = "popup=false; max-age=2628000"; //popup закрыт
});

const cookieValue = getCookie("popup");
if (cookieValue == "false") {
  popupStatus = false;
}

if (popupStatus) {
  setTimeout(showPopup, 2000);
}



















// Необходимо реализовать всплывающее окно, которое появляется только один раз. 
// То есть, только после закрытия этого окна (а не просто обновления страницы), оно больше 
// никогда не покажется.

// При нажатии на элемент с классом modal__close необходимо закрыть окно. 
// Закрыть окно - значит удалить у него класс modal_active.

// После закрытия окна, установите в cookie-файле информацию о закрытии окна
// Если после перезагрузки в cookie нет информации о закрытии, необходимо окно показать.
// Если страница была перезагружена с показанным окном, в cookie-файл не нужно ничего вносить