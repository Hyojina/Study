//현재 button이 사라져서 작동하지 않음! 대신 이전의 function 부분을 html에서 구현!
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
