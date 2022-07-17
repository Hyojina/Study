//img 폴더의 이미지 파일들 이름과 동일하게
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //append는 가장 아래에, prepend는 가장 위에 오게 함
