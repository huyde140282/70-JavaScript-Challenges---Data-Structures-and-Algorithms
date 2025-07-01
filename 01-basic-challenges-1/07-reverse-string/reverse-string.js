// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
function reverseString(str) {
  let newStr = '';
  for (let index = str.length - 1; index >= 0; index--) {
    newStr += str[index];
  }
  return newStr;
}

module.exports = reverseString;
