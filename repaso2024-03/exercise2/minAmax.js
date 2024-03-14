function minAndMax(numbersStr) {
  const strNumbers = numbersStr.split(" ");

  // const numbers = [];
  // for (const strNumber of strNumbers) {
  //   numbers.push(Number(strNumber));
  // }

  const numbers = strNumbers.map((n) => Number(n));

  const output = [];

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
      console.log(min);
    }
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }

  output.push(min);
  output.push(max);

  return output;
}
