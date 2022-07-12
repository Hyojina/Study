//현재 button이 사라져서 작동하지 않음! 대신 이전의 function 부분을 html에서 구현!
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

//이벤트 정보가 넘어온다!!
function onLoginSubmit(event) {
  event.preventDefault(); //어떤 event의 기본행동이든지 발생되지 않도록 막음!!
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
