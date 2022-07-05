// const형 배열은 배열내 존재하는 값들을 수정할 수 있고 제거도 가능하다.
// 이유는 상수 배열은 값 자체를 접근하는 것이 아닌 참조값으로 접근하고 있기 때문.
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; //array

// Get item from array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");