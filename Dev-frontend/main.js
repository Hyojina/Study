// 반복문 (For statement)

const ulEl = document.querySelector("ul");

console.log(ulEl);

for (let i = 0; i < 3; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  ulEl.appendChild(li);
}
