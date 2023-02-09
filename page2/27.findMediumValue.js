function solution(array) {
  const sortArr = array.sort(function (a, b) {
    return a - b;
  });
  const centerValue = parseInt(sortArr.length / 2);
  return sortArr[centerValue];
}

console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
