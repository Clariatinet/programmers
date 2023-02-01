function solution(sides) {
  const arr = sides.sort(function (a, b) {
    return a - b;
  });
  if (arr[0] + arr[1] < arr[2]) {
    return 2;
  } else if (arr[0] + arr[1] <= arr[2]) {
    return 2;
  } else {
    return 1;
  }
}

console.log(solution([1, 2, 3])); // 2
console.log(solution([3, 6, 2])); // 2
console.log(solution([199, 72, 222])); // 1

// 가장 긴 선분은 두 변의 합보다 작아야 한다.
// 삼각형이 가능하면 1
// 삼각형이 불가능하면 2
