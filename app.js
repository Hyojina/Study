const canvas = document.querySelector("canvas");

// context는 기본적으로 붓(브러쉬)를 의미
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
let isPainting = false;

const colors = [
  "#cd84f1",
  "#ffcccc",
  "#ff4d4d",
  "#ffaf40",
  "#fffa65",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
// Q. moveTo를 if문 뒤에 써야 하는 이유
// A. moveTo의 역할은 마우스의 현재 위치를 받아오는 역할
//    if문의 역할은 마우 클릭을 감지하는 역할
//      moveTo를 먼저 쓸 경우, 함수가 실행되는 동안에 moveTo의 좌표와 lineTo의 좌표가 동일하게 인식되어 선을 그릴 수 없음
//      moveTo를 나중에 쓸 경우, return으로 인해 if문만 실행되고 moveTo는 실행되지 않음
//               매번 실행될 때마다 lineTo만 실행되므로 이어진 선을 그릴 수 있음
//               * lineTo: 이전 경로의 마지막 지점을 지정된 좌표 lineTo()에 연결하여 현재 하위 경로에 직선을 추가
//      그렇다고 moveTo가 필요없다고 생각해서 지워버리게 되면
//      새로운 선을 그릴 때 moveTo가 실행되지 않으므로
//      첫번째 선의 마지막점과 새로운 선의 시작선 사이에 직선이 생김

function onMouseDown() {
  isPainting = true;
}

function onMouseUp() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
// document.addEventListener("mouseup", onMouseUp);
