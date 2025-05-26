const editor = document.getElementById("editor");
const clear = document.getElementById("clear");
let currentValue;

editor.value = localStorage.getItem("text");

editor.addEventListener("input", () => {
  currentValue = editor.value;
  localStorage.setItem("text", currentValue);
});

clear.addEventListener("click", () => {
  editor.value = "";
  localStorage.removeItem("text");
});