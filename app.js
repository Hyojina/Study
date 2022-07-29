const colorOptions = Array.from(
  //HTML모음을 배열로 만들어주기
  document.getElementsByClassName("color-option") //HTML모음으로 줌
);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const modeBtn = document.getElementById("mode-btn");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }

  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
  isPainting = true;
}

function onMouseUp() {
  isPainting = false;
  ctx.beginPath(); //선을 다 그렸으면 새 경로 만들어주기(move와 down에 들어가도 작동함)
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
  ctx.fillStyle = event.target.value; //채우는 색상도 변경
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  // console.dir(event.target.dataset.color);
  ctx.strokeStyle = event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color;
  color.value = event.target.dataset.color;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}

//그리기
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
canvas.addEventListener("click", onCanvasClick);

//붓 사이즈
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

//팔레트
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

//캔버스 채우기
modeBtn.addEventListener("click", onModeClick);
