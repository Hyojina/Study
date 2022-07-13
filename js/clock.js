const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`;
}

getClock(); //이걸 써주면 1초를 안기다려도 처음에 보여줌!!
setInterval(getClock, 1000);
