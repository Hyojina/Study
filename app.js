const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  // 이렇게 하면 섹시폰트는 살아있다! 그리고 아주 간단한 코드!
}

h1.addEventListener("click", handleTitleClick);
