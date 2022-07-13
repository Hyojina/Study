const clock = document.querySelector("h2#clock");

function sayInterval() {
  console.log("interval");
}

function sayTimeout() {
  console.log("timeout");
}

setInterval(sayInterval, 1000); //계속 실행

setTimeout(sayTimeout, 1000); //한번만 실행
