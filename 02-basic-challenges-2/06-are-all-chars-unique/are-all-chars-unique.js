// function areAllCharactersUnique(str) {
//   if (!str) return true;
//   const charSet = new Set(str);
//   return charSet.size === str.length;
// }

function areAllCharactersUnique(str) {
  if (!str) return true;
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) return false;
    charCount[char] = true;
  }
  return true;
}

module.exports = areAllCharactersUnique;
