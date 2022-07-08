const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
  // 이렇게 하면 섹시폰트는 살아있다!
}

h1.addEventListener("click", handleTitleClick);
