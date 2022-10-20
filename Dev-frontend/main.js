import getType from "./getType";

console.log(typeof "Hello World!"); //string
console.log(typeof 123); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof {}); //object
console.log(typeof []); //object

console.log(getType(123)); //Number
console.log(getType(false)); //False
console.log(getType(null)); //Null
console.log(getType({})); //Object
console.log(getType([])); //Array
