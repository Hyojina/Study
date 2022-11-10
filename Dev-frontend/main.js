const numbers = [1, 2, 3, 4];

const fruits = ["Apple", "Banana", "Cherry"];

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`);
});
console.log(a); // undefined

// map으로 배열 만들기
const b = fruits.map(function (fruit, index) {
  return `${fruit}-${index}`;
});
console.log(b); // ['Apple-0', 'Banana-1', 'Cherry-2']

// map으로 객체 만들기
const c = fruits.map(function (fruit, index) {
  return {
    id: index,
    name: fruit,
  };
});
console.log(c);

const d = numbers.map((number) => number < 3);
console.log(d); // [true, true, false, false]

const e = numbers.filter((number) => number < 3);
console.log(e); // [1, 2]

const f = numbers.filter((number) => number + 100);
console.log(f); // [1, 2]

const g = numbers.includes(3);
console.log(g); // true

const h = fruits.includes("Hyojina");
console.log(h); // false

numbers.splice(2, 1);
console.log(numbers); // [1, 2, 4]

numbers.splice(1, 0, "a");
console.log(numbers); // [1, 100, 2, 4]

numbers.reverse();
fruits.reverse();

console.log(numbers); // [4, 3, 2, 1]
console.log(fruits); // ['Cherry', 'Banana', 'Apple']

numbers.push(5);
console.log(numbers); // [4, 2, 'a', 1, 5]

numbers.unshift(0);
console.log(numbers); // [0, 4, 2, 'a', 1, 5]
