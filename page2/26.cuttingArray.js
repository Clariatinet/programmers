function solution(numbers, num1, num2) {
  const arr = numbers;
  return arr.slice(num1, num2 + 1);
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));
console.log(solution([1, 3, 5], 1, 2));
