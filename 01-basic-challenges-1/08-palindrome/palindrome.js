function isPalindrome(str) {
  let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverseStr = newStr.split('').reverse().join('');
  return formattedStr == reverseStr;
}

module.exports = isPalindrome;
