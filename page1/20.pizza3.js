function solution(slice, n) {
  if (slice >= 2 || slice <= 10) {
    return Math.ceil(slice / n);
  } else {
    return;
  }
}

console.log(solution(7, 10));
console.log(solution(4, 12));
// 피자 1개당 최소 2조각 ~ 최대 10조각
// 얼마나 잘라서 먹을 지는 자유
// 7조각으로 10명이 먹으면 2판 > 14조각
// 4조각씩 12명이 먹으면 3판 > 12조각
