const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("Title was clicked!");
  h1.innerText = "CLICKED!";
  h1.style.color = "green";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
  h1.style.color = "blue";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
  h1.style.color = "white";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "gray";
}
function handleWindowCopy() {
  alert("copier!");
  h1.innerText = "COPIER!!";
  h1.style.color = "red";
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOD");
}

//자바스크립트가 실행할거니까 함수에 () 붙여서 실행해버리지 않기! ()는 실행하는거임! h1.addEventListener("click", handleTitleClick); h1.addEventListener("mouseenter", handleMouseEnter); h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
