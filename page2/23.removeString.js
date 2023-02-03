function solution(my_string, letter) {
  const str = my_string.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      str.splice(i, 1);
      // 여기는 잘 이해 안감...
      i--;
    }
  }
  const joinStr = str.join('');
  return joinStr;
}

console.log(solution('abcdef', 'f'));
console.log(solution('BCBdbe', 'B'));

// function solution(my_string, letter) {
//   if (my_string.includes(letter)) {
//     let my_array = [...my_string];
//     let my_filter = my_array.filter((t) => t !== letter);
//     return my_filter.join(“”);
//   }
//   return my_string;
// }
