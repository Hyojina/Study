const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//local storage안에 todo를 넣고싶지만, 텍스트로 넣지 않고 배열로 넣고싶다면!
//JSON.stringify(~) : ~가 objects나 array나 어떤 js 코드던간에 string으로 만들어 줌
//하지만 이것 역시 단순한 string일 뿐, 살아있는 array로 만들려면 JSON.parse(JSON.stringify(~)) 해야함

// function sayHello(item) {
//   console.log(`Local Storage에 저장된 ToDos 값 '${item}' 입니다.`);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

//toDos가 null일 때도 있다.
//만약 savedToDos가 localStorage에 존재하면~?
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);

  //array에 있는 각각의 item에 대해 function을 실행할 수 있게 해줌
  //array는 forEach function을 가지고 있고, array만큼 실행될 것
  //하지만 처리되고 있는 item이 어떤 것인지 알아야 함!
  //evenListener가 event를 그냥 제공해주는 것 처럼,
  //JS는 지금 처리되고있는 item 역시 제공해줌
  //forEach에서 호출하는 함수에 자동으로 item이 넘어갑니다~~

  //function을 만드는 것 대신에 아래와 같이 만들 수 있다.
  //이를 arrow function이라고 부른다.
  parsedToDos.forEach((item) =>
    console.log(`Local Storage에 저장된 ToDos 값 '${item}' 입니다.`)
  );
}
