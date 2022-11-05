function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const hyojina = new User("Hyojina", "Kim");

console.log(hyojina);
console.log(hyojina.getFullName());
