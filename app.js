const player = {
  // property 특성 적기
  name: "Hyojin",
  points: 100,
  fat: false,
};

console.log(player);

player.name = "Jinhyo";
player.points = player.points + 20;

console.log(player.name);
console.log(player["name"]);
console.log(player.points);
console.log(player["points"]);
