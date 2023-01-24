function solution(num_list) {
  const odd = [];
  const even = [];

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even.push(num_list.length);
    }
    if (num_list[i] % 2 === 1) {
      odd.push(num_list.length);
    }
  }

  return [even.length, odd.length];
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));
