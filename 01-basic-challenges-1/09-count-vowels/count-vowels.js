function countVowels(str) {
  let formattedStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < formattedStr.length; i++) {
    if (isIncludeVowels(formattedStr[i])) count++;
  }
  return count;
}

function isIncludeVowels(char) {
  if (
    char === 'a' ||
    char === 'i' ||
    char === 'u' ||
    char === 'e' ||
    char === 'o'
  ) {
    return true;
  }
  return false;
}

module.exports = countVowels;
