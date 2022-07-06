const age = parseInt(prompt("How old are you?"));

//isNaN(age)는 boolean을 반환하기 때문에 == true 같은건 안써도 됨!
//소수였을 땐 어떻게 해야하나 했더니, parseInt()에서 이미 정수로 다 만들어버렸다!!
if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whaterver you want");
}
