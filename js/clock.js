const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${hours}시 ${minutes}분 ${seconds}초`;
}

getClock(); //이걸 써주면 1초를 안기다려도 처음에 보여줌!!
setInterval(getClock, 1000);
