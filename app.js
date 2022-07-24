const canvas = document.querySelector("canvas");

// context는 기본적으로 붓(브러쉬)를 의미
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

//몸통과 팔
ctx.fillRect(235, 200, 15, 100);
ctx.fillRect(330, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

//얼굴(원) 그리기
//x좌표, y좌표, 반지름 길이, startAngle,endAngle
//원 '○'의 동쪽부터 시계방향으로 0, 0.5*PI, 1*PI, 1.5*Pi
ctx.arc(290, 150, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath(); //색을 바꿔주려면, 새 경로가 필요한지 먼저 체크해야함
ctx.fillStyle = "gold";
ctx.arc(275, 140, 8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(305, 140, 8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();
