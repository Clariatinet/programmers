function solution(my_string) {
  const reverseStr = my_string.split('');
  reverseStr.reverse();
  // 배열을 문자열로 합치는 함수 join()
  const joinStr = reverseStr.join('');
  return joinStr;
}

console.log(solution('jaron'));
console.log(solution('bread'));
