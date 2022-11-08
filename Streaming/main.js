function solution(nums) {
  let answer = [0, 0, 0, 0]; // row, col, cross↘, cross↙

  for (let i = 0; i < nums.length; i++) {
    let row, col;
    row = 0;
    col = 0;

    for (let j = 0; j < nums[i].length; j++) {
      row += nums[i][j];
      col += nums[j][i];
    }

    answer[0] = row > answer[0] ? row : answer[0];
    answer[1] = col > answer[1] ? col : answer[1];

    answer[2] += nums[i][i];
    answer[3] += nums[nums.length - i - 1][i];
  }

  return Math.max(...answer);
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
console.log(
  solution([
    [17, 19, 12, 11, 15],
    [17, 36, 30, 83, 11],
    [19, 30, 70, 53, 75],
    [17, 22, 67, 47, 37],
    [15, 37, 78, 93, 59],
  ])
);
console.log(
  solution([
    [57, 65, 22, 33, 11, 11],
    [15, 66, 77, 34, 21, 13],
    [55, 12, 11, 55, 11, 55],
    [54, 33, 66, 88, 11, 22],
    [88, 99, 12, 16, 18, 33],
    [11, 100, 22, 68, 88, 17],
  ])
);
