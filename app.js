const canvas = document.querySelector("canvas");

// 캔버스에 그림 그릴 때 쓰는거
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//(선을 긋지 않으면서)페인팅 브러쉬의 위치를 옮기고
ctx.moveTo(100, 100);

//내가 현재 있는곳으로부터 옮길 곳까지(선을 그려준다)
//중간중간 작동하는지 보려면 stroke 함수를 호출하여 확인 가능
ctx.lineTo(200, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);
ctx.lineTo(100, 100);

//완벽히 사각형을 그리면 fill함수 호출하여 색칠 가능
ctx.fillStyle = "gold";
ctx.fill();
