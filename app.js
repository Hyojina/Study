const canvas = document.querySelector("canvas");

// 캔버스에 그림 그릴 때 쓰는거
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//x좌표,y좌표,가로길이,세로길이
//fillRect는 단축함수임
ctx.fillRect(50, 50, 100, 200);
ctx.strokeRect(200, 50, 100, 200);

//1.실제로 해야하는건 선을 먼저 그리고
//2.포인트 A부터 포인트 B까지 선택하고
//3.그걸 fill 할지, stroke할지 정해야함

ctx.rect(400, 50, 100, 100);
ctx.rect(500, 150, 100, 100);
ctx.fill(); //마지막으로 fill을 해야 정사각형이 나타난다.

//경로가 같으면 모든 사각형이 pink가 됨
//이전 경로와 분리하여 새 경로를 만들어준다.
ctx.beginPath();
ctx.rect(600, 50, 100, 100);
ctx.fillStyle = "pink";

//5초 뒤 사각형 그리기
setTimeout(() => {
  ctx.fill();
}, 5000);
