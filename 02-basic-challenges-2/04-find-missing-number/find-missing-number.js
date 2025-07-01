function findMissingNumber(numbers) {
  if (!numbers) return undefined;
  if (!numbers.length) return 1;
  const len = numbers.length + 1;
  const expectedSum = (len * (len + 1)) / 2;
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);
  //   let foundNum = sumnum;
  //   for (const element of numbers) {
  //     foundNum -= element;
  //   }
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
