function solution(n) {
  let number = 0;
  for (let i = 2; i <= n; i = i + 2) {
    number = number + i;
  }
  return number;
}

console.log(solution(10));
console.log(solution(4));
