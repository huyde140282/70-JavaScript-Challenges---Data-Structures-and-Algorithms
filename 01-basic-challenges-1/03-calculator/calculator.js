function calculator(num1, num2, operator) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    typeof operator !== 'string'
  ) {
    throw new Error(
      'Invalid input types. num1 and num2 must be numbers, and operator must be a string.'
    );
  }
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return null;
  }
}

module.exports = calculator;
