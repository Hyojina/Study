const title = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked!");
  title.innerText = "CLICKED!";
  title.style.color = "green";
}
function handleMouseEnter() {
  title.innerText = "Mouse is here!";
  title.style.color = "blue";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
  title.style.color = "red";
}

//자바스크립트가 실행할거니까 함수에 () 붙여서 실행해버리지 않기! ()는 실행하는거임!
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
