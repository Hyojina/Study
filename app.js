const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//두번 이상 사용하는 값들은 변수로 만드는 것이 좋다.
//그리고 일반적으로 string만 포함된 변수는 대문자로 표기함!
const HIDDEN_CLASSNAME = "hidden";

//이벤트 정보가 넘어온다!!
function onLoginSubmit(event) {
  event.preventDefault(); //어떤 event의 기본행동이든지 발생되지 않도록 막음!!
  const username = loginInput.value;

  console.log(username);
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}!`;

  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
