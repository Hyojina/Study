// -------------- 산술 연산자

console.log(1 + 2); // 3
console.log(5 - 7); //-2
console.log(3 * 4); //12
console.log(8 / 2); //4
console.log(9 % 6); //3

// -------------- 할당 연산자

let a = 2;
a += 1; // a = a + 1와 동일

console.log(a); //3

// -------------- 비교 연산자

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1)); //true
console.log(isEqual(1, 2)); //false
console.log(isEqual(2, "2")); //false
console.log(3 !== 4); //true

console.log(3 < 4); // true
console.log(3 >= 3); //true

// -------------- 논리 연산자

const b = 1 === 1;
const c = "AB" === "AB";
const d = false;

console.log(b);
console.log(c);
console.log(d);

console.log(b && d); //false
console.log(b || d); // true
console.log(!d); // true

// -------------- 삼항 연산자

const x = 1 < 2; //true

if (a) {
  console.log("참");
} else {
  console.log("거짓");
}

console.log(a ? "참" : "거짓"); // 위와 동일한 코드
