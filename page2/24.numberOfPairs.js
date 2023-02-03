function solution(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.length;
}

console.log(solution(20));
console.log(solution(100));

// (1, 20)(2, 10), (4, 5), (5, 4), (10, 2), (20, 1);

// function solution(n) {
//   let num = 0;
//   for (let a = 1; a <= Math.sqrt(n); a++) {
//     for (let b = 1; b <= n; b++) {
//       if (a * b === n && a<b) {
//         num += 1;
//       } else if (a === b && a * b === n) {
//         return num * 2 + 1;
//       }
//     }
//   }
//   return num * 2;
// }
