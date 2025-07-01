// function findMissingLetter(letters) {
//   if (!letters.length) return '';
//   const len = letters.length;
//   const letterArr = letters.map(val => val.charCodeAt(0));
//   const expectedSum = ((letterArr[len - 1] + letterArr[0]) * (len + 1)) / 2;
//   const actualSum = letterArr.reduce((sum, num) => sum + num, 0);
//   const missingLetterCode = expectedSum - actualSum;
//   return String.fromCharCode(missingLetterCode);
// }
function findMissingLetter(letters) {
  if (!letters || !letters.length) return '';
  for (let i = 0; i < letters.length; i++) {
    const current = letters[i].charCodeAt(0);
    const next = letters[i + 1].charCodeAt(0);
    if (next - current > 1) {
      return String.fromCharCode(current + 1);
    }
  }
  return '';
}

module.exports = findMissingLetter;
