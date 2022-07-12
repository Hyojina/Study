const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  greeting.innerText = `Hello ${username}!`;

  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  localStorage.setItem("username", username);
  console.log(localStorage.getItem("username"));
}

loginForm.addEventListener("submit", onLoginSubmit);
