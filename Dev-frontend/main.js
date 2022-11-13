import _ from "lodash";

const userA = [
  { userId: "1", name: "Hyojina" },
  { userId: "2", name: "Kim" },
];

const userB = [
  { userId: "1", name: "Hyojina" },
  { userId: "3", name: "HJ" },
];

const userC = userA.concat(userB);
console.log("concat", userC);
console.log("uniqBy", _.uniqBy(userC, "userId"));

const userD = _.unionBy(userA, userB, "userId");
console.log("unionBy", userD);
