const taskInput = document.getElementById("task__input");
const buttonTaskAdd = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");

buttonTaskAdd.addEventListener("click", (event) => {
  event.preventDefault();
  if(taskInput.value !== ""){
    taskAdd();
  }else {
    console.error("Введите название новой задачи");
  }
});

function taskAdd() {
  const task = document.createElement("div");
  const taskTitle = document.createElement("div");
  const taskRemove = document.createElement("a");
  task.className = "task";
  taskTitle.className = "task__title";
  taskRemove.className = "task__remove";
  taskRemove.innerHTML = '&times;';
  taskTitle.textContent = taskInput.value;

  taskList.appendChild(task);
  task.appendChild(taskTitle);
  task.appendChild(taskRemove);

  taskRemove.addEventListener("click", (event) => {
    event.preventDefault();
    const taskDeletedButton = event.target;
    if(taskDeletedButton) {
      const taskDeleted = taskDeletedButton.parentNode;
      if(taskDeleted) {
        taskDeleted.remove();
      }
    }
  });
}