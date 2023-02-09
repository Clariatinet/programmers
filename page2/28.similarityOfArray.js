function solution(s1, s2) {
  const arr1 = s1;
  const arr2 = s2;

  const value = arr1.filter((item) => {
    return arr2.includes(item);
  });
  return value.length;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
console.log(solution(['n', 'omg'], ['m', 'dot']));
