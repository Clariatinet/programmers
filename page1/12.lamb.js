function solution(n, k) {
  const lamb = 12000;
  const drink = 2000;
  const sDrink = -2000;
  const price = (lamb * 10) / n + drink * k;
  return price;
}

console.log(solution(10, 3));
