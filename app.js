const canvas = document.querySelector("canvas");

// 캔버스에 그림 그릴 때 쓰는거
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//x좌표,y좌표,가로길이,세로길이
ctx.fillRect(50, 50, 100, 200);
