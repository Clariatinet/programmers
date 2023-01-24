function solution(strlist) {
  const array = [];
  for (let i = 0; i < strlist.length; i++) {
    array.push(strlist[i].length);
  }
  return array;
}

console.log(solution(['We', 'are', 'the', 'world!']));
console.log(solution(['I', 'Love', 'Programmers.']));
