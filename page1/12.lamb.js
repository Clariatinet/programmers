function solution(n, k) {
  const lamb = 12000;
  const drink = 2000;
  const service = Math.floor(n / 10) * drink;
  const price = lamb * n + drink * k - service;
  return price;
}

console.log(solution(10, 3));
console.log(solution(64, 6));
