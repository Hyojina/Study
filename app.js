const colorOptions = Array.from(
  //HTML모음을 배열로 만들어주기
  document.getElementsByClassName("color-option") //HTML모음으로 줌
);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
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
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file); //브라우저 메모리에 있는 url
  const image = new Image(); //<img src=""/>와 동일
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  ctx.lineWidth = 1;
  ctx.strokeText(text, event.offsetX, event.offsetY);
  // console.log(event.offsetX, event.offsetY); //마우스가 클릭한 canvas 내부 좌표
}

//그리기
canvas.addEventListener("mousemove", onMove); //canvas.onmousemove = onMove(이것과 동일한 문장)
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

//캔버스 지우기
destroyBtn.addEventListener("click", onDestroyClick);

//지우개
eraserBtn.addEventListener("click", onEraserClick);

//이미지 파일 추가
fileInput.addEventListener("change", onFileChange);

canvas.addEventListener("dblclick", onDoubleClick);
