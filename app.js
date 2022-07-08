const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked sexy-font";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
  // element에서 calss name을 변경하고 제거하고 추가하는 방법을 배웠다.
  // 그러나, 문제! class의 초기값을 잃게됨..
}

h1.addEventListener("click", handleTitleClick);
