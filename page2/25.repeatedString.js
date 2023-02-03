function solution(my_string, n) {
  const arr = [];
  const splitStr = my_string.split('');
  splitStr.map((item) => {
    for (let i = 0; i < n; i++) {
      arr.push(item);
    }
  });
  const joinArr = arr.join('');
  return joinArr;
}

console.log(solution('hello', 3));

// function solution(my_string, n) {
//   let answer = [];
//   [...my_string].map((item) => {
//     for (let i = 0; i < n; i++) {
//       answer.push(item);
//     }
//   });
//   return answer.join(“”);
// }
