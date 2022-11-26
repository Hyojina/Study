function solution(s, c) {
  let answer = 0;

  for (i = 0; i < s.length; i++) {
    // if (s[i].includes(c)) answer++;
    // 함수 남발은 좋지 않습니다. 호출 시간이 걸리기 때문!
    if (s[i] === c) answer++;
  }
  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
