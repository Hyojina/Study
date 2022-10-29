// 형 변환(Type conversion)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, "false", -12, "3.14" ...

// Falsy(거짓 같은 값)
// flase, "", null, undefined, 0, -0, NaN

if (false) {
  console.log(123); // 123 출력 안됨
}

if ("flase") {
  //(그저 문자데이터!)
  console.log(456); // 456 출력됨
}
