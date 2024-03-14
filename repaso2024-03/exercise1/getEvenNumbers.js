function getEvenNumbers(numbers) {
  // filtra los números pares utilizando el operador % (módulo)
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}
