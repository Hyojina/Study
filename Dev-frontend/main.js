const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

console.log(numbers[1]); // 2
console.log(fruits[2]); // Cherry

console.log(numbers.length); // 4
console.log(fruits.length); // 3
console.log([4, 5].length); // 2
console.log([].length); // 0, 배열이 비어있음을 나타냅니다. 자주 사용해요!

console.log(numbers.concat(fruits)); // [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry']
console.log(numbers); // [1, 2, 3, 4]
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

console.log(
  fruits.forEach(function (element, index, array) {
    console.log(element, index, array);
  })
);
// Apple 0 (3) ['Apple', 'Banana', 'Cherry']
// Banana 1 (3) ['Apple', 'Banana', 'Cherry']
// Cherry 2 (3) ['Apple', 'Banana', 'Cherry']

const arr = [5, 10, 26, 44, 70];

console.log(arr.find((element) => element > 10)); // 26
