const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
  // li도 만들고 그 안에 span도 만들고싶다!
  const li = document.createElement("li");
  const span = document.createElement("span"); //현재 li에 없는 상태
  li.appendChild(span);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
