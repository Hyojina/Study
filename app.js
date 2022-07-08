const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "plum") {
    newColor = "tomato";
  } else {
    newColor = "plum";
  }
  h1.style.color = newColor;
  console.log(currentColor);
}

h1.addEventListener("click", handleTitleClick);
