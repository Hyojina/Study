import random from "./getRandom";

// 조건문 (Switch statement)

const a = random();

switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 2:
    console.log("a is 2");
    break;
  default:
    console.log("rest...");
}
