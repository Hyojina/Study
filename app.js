// 하나의 개체, 즉 player에 대한 설명을 하고싶다면 objects를 만드는 것이 좋다.

// 변수로 선언하는 것이 적합하지 않은 이유는 모든 변수의 이름을 다 기억할 수 없다.
const playerNameX = "Hyojin";
const playerPointsX = 121212;
const playerBeautyX = true;

// array가 적합하지 않은 이유는 배열값이 어떤 의미인지 알 수 없기 때문
const playerX = ["Hyojin", 121212, true];


const player ={
    // property 특성 적기
    name: "Hyojin",
    points: 100,
    fat: false,
};

console.log(player);
console.log(player.name);
console.log(player["name"]); //위와 동일함
