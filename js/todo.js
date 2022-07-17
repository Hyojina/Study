const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  // event에서 기본적인 정보를 찾을 수 있음
  // target은 클릭된 html element
  // parentElement는 클릭된 element의 부모
  // console.log(event.target.parentElement.innerText);

  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  // li도 만들고 그 안에 span도 만들고싶다! 나중에 버튼도 만들 예정
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;

  const button = document.createElement("button");
  button.innerText = "✔";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
