const str1 = "Hello world!";
//           012345678901
console.log(str1.length); // 12

console.log(str1.includes("Hello")); // true
console.log(str1.includes("Hello", 1)); // false

console.log(str1.indexOf("world")); // 6
console.log(str1.indexOf("Hyojina")); // -1

console.log(str1.match(/^.*(?=\s)/gi)); // ['Hello']

console.log(str1.search(/\s/)); // 5

console.log(str1.slice(0, 5)); // 'Hello'
console.log(str1.slice(6, -1)); // 'world'
console.log(str1.slice(6)); // 'world!'

console.log(str1.startsWith("Hello")); // true
console.log(str1.startsWith("world")); // false
console.log(str1.startsWith("world", 6)); // true

console.log(str1.toLowerCase()); // 'apple, banana, cherry'
console.log(str1.toUpperCase()); // 'APPLE, BANANA, CHERRY'

const str2 = "1234567";
console.log(str2); // '1234567'
console.log(str2.padStart(10, "0")); // '0001234567'
console.log(str2.padEnd(10, "0")); // '1234500000'

const str3 = "Hello, Hello?!";
console.log(str3); // 'Hello, Hello?!'
console.log(str3.replace("Hello", "Hi")); // 'Hi, Hello?!'
console.log(str3.replace(/Hello/g, "Hi")); // 'Hi, Hi?!'

const str4 = "Apple, Banana, Cherry";
console.log(str4.split(", ")); // ['Apple', 'Banana', 'Cherry']

const str5 = "Apple";
console.log(str5.split("").reverse().join("")); // elppA

const str6 = "   Hello world!  ";
console.log(str6.trim()); // 'Hello world!'
