const canvas = document.querySelector("canvas");

// context는 기본적으로 붓(브러쉬)를 의미
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//벽
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

//문을 그려준다.
ctx.fillRect(300, 300, 50, 100);

//천장
ctx.fillRect(200, 200, 200, 20);

//지붕
ctx.moveTo(200, 200);
ctx.lineTo(325, 100); //벽의 넓이도 생각해서 중앙까지 그린다.
ctx.lineTo(450, 200);
ctx.fill();
