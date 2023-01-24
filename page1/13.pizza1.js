function solution(n) {
  const pizza = 7;
  const people = n;

  return Math.ceil(people / pizza);
}

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
