function num() {
  console.log(arguments);
  return arguments[0] + arguments[1]; // 3
}

console.log(num(1, 2));
