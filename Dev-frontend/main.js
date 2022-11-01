// 콜백(Callback)

// 매개변수를 하나 추가해줍니다. callback 혹은 cb
function timeout(cb) {
  setTimeout(() => {
    console.log("타이머");
    cb(); // 매개변수로 넘어온 함수를 호출합니다.
  }, 3000);
}

// timout 함수에 인수를 넣는 형태입니다.
timeout(() => console.log("타이머 끝!"));
