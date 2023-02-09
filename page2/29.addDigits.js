function solution(n) {
  const number = n;
  let value = 0;
  const toStringNumber = number.toString();
  const splitNumber = toStringNumber.split('');

  for (let i = 0; i < splitNumber.length; i++) {
    value = value + Number(splitNumber[i]);
  }
  return value;
}

console.log(solution(1234));
console.log(solution(930211));
