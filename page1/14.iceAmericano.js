function solution(money) {
  const americano = 5500;
  const glass = Math.floor(money / americano);
  const change = money - glass * americano;

  return [glass, change];
}

console.log(solution(5500));
console.log(solution(15000));
